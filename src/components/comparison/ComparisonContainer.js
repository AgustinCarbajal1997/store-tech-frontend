import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import URL from "../../constants/url";
import ComparisonFrame from "./ComparisonFrame";
const ComparisonContainer = () => {
  const products = useSelector((state) => state.comparison.products);
  const [fields, setFields] = useState(null);
  useEffect(() => {
    if (!products.length) return;
    const query = products.reduce(
      (ac, item, idx) => (!idx ? ac + "?q[]=" + item : ac + "&q[]=" + item),
      ""
    );
    fetch(`${URL}/api/products/getComparison${query}&page=1&limit=3&pagination=true`)
      .then((res) => res.json())
      .then((data) => setFields(data.data))
      .catch((error) => console.log(error));
  }, [products]);
  return (
    <>
      {products.length > 0 && fields && (
        <ComparisonFrame products={products} fields={fields} />
      )}
    </>
  );
};

export default ComparisonContainer;
