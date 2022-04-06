import React, { useState } from "react";
const OptionsListMobile = ({ listOptions }) => {
  const [hideCategories, setHideCategories] = useState(true);
  return (
    <>
      <ul className="optionsList-mobile">
        {listOptions.map((item, index) => (
          <li
            key={`option${index}`}
            className={`optionsList-mobile-list ${
              index >= 6 && hideCategories ? "hideCategory" : null
            }`}
          >
            <figure>
              <img src={item.img} alt={item.title} />
              <figcaption>{item.title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <button
        className="optionList-mobile-see-categories"
        onClick={() => setHideCategories(!hideCategories)}
      >
        VER { hideCategories ? "MÁS" : "MENOS" } CATEGORÍAS
      </button>
    </>
  );
};

export default OptionsListMobile;
