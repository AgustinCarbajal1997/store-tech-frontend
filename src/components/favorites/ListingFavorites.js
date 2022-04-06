import React from "react";
import { Link } from "react-router-dom";
const ListingFavorites = ({ products }) => {
  return (
    <section className="products-list">
      {products.map((item) => {
        return (
          <div key={item.id} className="products-list-item">
            <Link
              to={`/categoria/${item.article}/${item.id}-${item.title
                .split(" ")
                .join("-")}`}
            >
              <img
                className="products-list-item__image"
                src={item.images[0]}
                alt={item.title}
              />
              <h4 className="products-list-item__title">{item.title}</h4>
              <h5 className="products-list-item__price">${item.price}</h5>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default ListingFavorites;
