import { Link } from "react-router-dom";

export const Suggestions = ({ suggestions, setSuggestions, setQuery }) => {
    const onClickLinkHandler = () =>{
        setSuggestions(null);
        setQuery("");
    }
  return (
    <div className="search-option">
      <ul>
        {suggestions.map((item, index) => (
          <Link
            to={`/categoria/${item.article}/${item.id}-${item.title
              .split(" ")
              .join("-")}`}
              onClick={onClickLinkHandler}
              key={index}
          >
            <li key={index}>{item.title.slice(0, 50)}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
