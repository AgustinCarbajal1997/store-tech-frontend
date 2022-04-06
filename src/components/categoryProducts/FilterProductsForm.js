import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Check from "../check/Check";
const FilterProductsForm = ({
  data,
  search,
  filteredData,
  hideFilter,
  setHideFilter,
}) => {
  const [brands, setBrands] = useState(null);
  const [checked, setChecked] = useState({});
  const history = useHistory();
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(search);
    let querys = {};
    for (let p of urlSearchParams) {
      querys = {
        ...querys,
        [p[0]]: p[1],
      };
    }
    setChecked(querys);
  }, [search]);

  const onClickHandle = (key, value) => {
    const urlSearchParams = new URLSearchParams(search);
    if (urlSearchParams.get(key) === value) {
      urlSearchParams.delete(key);
    } else {
      urlSearchParams.set(key, value);
    }
    urlSearchParams.set("page", 1);
    history.push({
      search: `${urlSearchParams}`,
    });
  };

  useEffect(() => {
    const brandsFilter = data
      .map((item) => item.brand.name)
      .reduce(
        (ac, item) =>
          item in ac ? { ...ac, [item]: ac[item] + 1 } : { ...ac, [item]: 1 },
        {}
      );
    setBrands(brandsFilter);
  }, [data]);

  return (
    <aside
      style={{ left: hideFilter ? "-100%" : "0" }}
      className="aside-form-container"
    >
      <div className="filter-buton-aside">
        <button onClick={() => setHideFilter(true)}>FILTRAR</button>
      </div>
      <h3>Filtrá tus productos</h3>
      <h4>
        <span>{filteredData.data.totalDocs}</span> resultados
      </h4>
      <form onChange={(e) => onClickHandle(e.target.name, e.target.value)}>
        <label>
          ORDENAR POR:
          <select
            name="orderBy"
            defaultValue={"orderBy" in checked ? checked["orderBy"] : "DEFAULT"}
            className="select"
          >
            <option value="DEFAULT" disabled>
              Aleatorio
            </option>
            <option value="asc">Menor precio</option>
            <option value="dsc">Mayor precio</option>
          </select>
        </label>
        <label className="brand-label">MARCA:</label>
        {brands &&
          Object.entries(brands).map((item, idx) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              key={idx}
            >
              <Check
                checked={checked["brandType"] === item[0] ? true : false}
                onClick={() => onClickHandle("brandType", item[0])}
              />
              <span>{`${item[0]} (${item[1]})`}</span>
            </div>
          ))}
      </form>
    </aside>
  );
};

export default FilterProductsForm;
