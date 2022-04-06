import { useHistory } from "react-router-dom"
const OptionsItem = ({ index, item, optionsQueries, width }) => {
  const history = useHistory(); 
  return (
    <li
      key={`option${index}`}
      className="section-options-list-item"
      style={{
        width: `${optionsQueries[width]}`,
      }}
      onClick={()=>history.push(item.href)}
    >
      <figure className="section-options-list__card">
        <img src={item.img} alt={item.title} />
        <figcaption>{item.title}</figcaption>
      </figure>
    </li>
  );
};

export default OptionsItem;
