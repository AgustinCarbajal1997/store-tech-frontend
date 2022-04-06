import { useHistory } from "react-router-dom";

const BannerListItem = ({ item, index, listIndex }) => {
  const history = useHistory();
  return (
    <div
      className={index === listIndex ? "slide isActiveSlider" : "slide"}
      onClick={() => history.push(item.href)}
      style={{ cursor: "pointer" }}
    >
      <picture>
        <source srcSet={item.bigImage} media="(min-width: 768px)" />
        <img src={item.smallImage} alt={`img-${index}`} />
      </picture>
    </div>
  );
};

export default BannerListItem;
