import useFetch from "../../customHooks/useFetch";
import { useParams } from "react-router";
import LoadingBars from "./Loading";
import ProductModel from "./ProductModel";
import URL from "../../constants/url";
const ProductView = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`${URL}/api/products/getById/${id.split("-")[0]}`);
  return (
    <section className="product-view">
      {loading && <LoadingBars />}
      {data && <ProductModel item={data.data} />}
    </section>
  );
};

export default ProductView;
