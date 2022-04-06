import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Suggestions } from "./Suggestions";
import URL from "../../constants/url";
import useOutsideAlerter from "../../customHooks/useClickOutsideRef";
const createQuery = (str) => {
  let queryArray = str
    .split(" ")
    .reduce(
      (ac, item, idx) => (!idx ? ac + "?q[]=" + item : ac + "&q[]=" + item),
      ""
    );
  return queryArray;
};

const GeneralSearch = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [query, setQuery] = useState("");
  const searchContainer = useRef(null);
  useOutsideAlerter(searchContainer, setSuggestions);
  const history = useHistory();

  const onChangeText = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length < 2) return setSuggestions(null);
    const queryArray = createQuery(value);
    try {
      const response = await fetch(
        `${URL}/api/products/generalSearch/${queryArray}&page=1&limit=10&pagination=true`
      );
      const { data } = await response.json();
      data.docs.length ? setSuggestions(data.docs) : setSuggestions(null);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmitHandler = () => {
    if (!suggestions) return;
    const queryArray = createQuery(query);
    history.push({
      pathname: "/search",
      search: queryArray,
    });
    setSuggestions(null);
  };
  const onKeyDownEnterHandler = (e) => {
    if (e.keyCode === 13) {
      onSubmitHandler()
      setSuggestions(null);
    };
  };
  
  return (
    <div className="search-container" ref={searchContainer}>
      <input
        type="text"
        onChange={onChangeText}
        onKeyDown={onKeyDownEnterHandler}
        value={query}
        placeholder="Buscar productos"
      />
      <div onClick={onSubmitHandler} className="search-icon">
        <FiSearch color="#ffffff" size="20px" />
      </div>
      {suggestions && query.length > 1 && (
        <Suggestions
          suggestions={suggestions}
          setSuggestions={setSuggestions}
          setQuery={setQuery}
        />
      )}
    </div>
  );
};

export default GeneralSearch;
