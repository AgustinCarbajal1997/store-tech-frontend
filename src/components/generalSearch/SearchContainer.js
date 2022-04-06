import { useLocation } from "react-router";
import useFetch from "../../customHooks/useFetch";
import ListingProducts from "../categoryProducts/ListingProducts";
import Loading from "../details/Loading";
import URL from "../../constants/url";
import { useState } from "react";
import Pagination from "../pagination/Pagination";
const SearchContainer = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const { data, loading } = useFetch(
    `${URL}/api/products/generalSearch/${location.search}&page=${page}&limit=4&pagination=true`
  );
  const onPrevPage = () => {
    if (data.data.page > 1) {
      setPage(page - 1);
    }
  };
  const onNextPage = () => {
    if (data.data.page < data.data.totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <>
      <div style={{ marginTop:"40px" }}>
        {data?.data?.docs?.length > 0 && (
          <ListingProducts products={data.data.docs} productsState={[]} />
        )}
        {data && !data.data.docs.length && <h2>No se encontraron productos</h2>}
        {loading && <Loading />}
      </div>
      {data?.data?.docs && (
        <Pagination
          page={data.data.page}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
          totalPages={data.data.totalPages}
        />
      )}
    </>
  );
};

export default SearchContainer;
