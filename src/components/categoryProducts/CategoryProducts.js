import { useState } from "react";
import useFetchFilters from "../../customHooks/useFetchFilters";
import { useParams, useLocation } from "react-router";
import ListingProducts from "./ListingProducts";
import LoadingBars from "../details/Loading";
import FilterProductsForm from "./FilterProductsForm";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComparison } from "../../store/actions/comparison.action";
import MobileFilterButton from "./MobileFilterButton";
import URL from "../../constants/url";
import Pagination from "../pagination/Pagination";
import { useHistory } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
const CategoryProducts = () => {
  const [hideFilter, setHideFilter] = useState(true);
  const { categoria } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.comparison.products);
  const { search } = useLocation();
  const url = `${URL}/api/products/getByCategory/${categoria}`;
  const { loading, data, filteredData, filterHandler } = useFetchFilters(
    url,
    search
  );
  const { data:allFields } = useFetch(`${URL}/api/products/getByCategory/${categoria}`)
  const deleteAllComparison = () => {
    dispatch(deleteComparison());
  };
  useEffect(() => {
    if (!search.length || !data) return;
    filterHandler(search);
  }, [search, filterHandler, data]);

  const onPrevPage = () => {
    const searchParams = new URLSearchParams(search);
    const currentPage = searchParams.get("page");
    if(parseInt(currentPage)> 1){
      searchParams.set("page",parseInt(currentPage)-1);
      history.push({ search:`${searchParams}` })
    }
  };
  const onNextPage = () => {
    const searchParams = new URLSearchParams(search);
    const currentPage = searchParams.get("page");
    if(parseInt(currentPage)<filteredData.data.totalPages){
      searchParams.set("page",parseInt(currentPage)+1);
      history.push({ search:`${searchParams}` })
    }
  };

  return (
    <>
      <div className="category-products-container">
        {loading && <LoadingBars />}
        {filteredData?.data?.docs && (
          <MobileFilterButton setHideFilter={setHideFilter} />
        )}
        {filteredData?.data?.docs && allFields?.data?.docs &&(
          <FilterProductsForm
            data={allFields.data.docs}
            search={search}
            filteredData={filteredData}
            hideFilter={hideFilter}
            setHideFilter={setHideFilter}
          />
        )}
        {filteredData?.data?.docs && (
          <ListingProducts
            products={filteredData.data.docs}
            productsState={productsState}
            deleteAllComparison={deleteAllComparison}
          />
        )}
      </div>
      {filteredData?.data?.docs && (
        <Pagination
          page={filteredData.data.page}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
          totalPages={filteredData.data.totalPages}
        />
      )}
    </>
  );
};

export default CategoryProducts;
