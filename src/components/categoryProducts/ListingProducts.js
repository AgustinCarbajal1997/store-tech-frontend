import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ComparingProductsButton from "../comparison/ComparingProductsButton";
import ComparisonBar from "../comparison/ComparisonBar";

const ListingProducts = ({ products, productsState, deleteAllComparison }) => {
  const sectionList = useRef(0);
  return (
    <section ref={sectionList} className="products-list">
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
              <h5 className="products-list-item__price">
                {new Intl.NumberFormat("es-AR", {
                  currency: "ARS",
                  style: "currency",
                }).format(item.price)}
              </h5>
            </Link>
            <ComparingProductsButton
              item={item}
              productsState={productsState}
            />
          </div>
        );
      })}
      {productsState.length > 0 && (
        <ComparisonBar
          clientWidth={sectionList.current.clientWidth}
          productsState={productsState}
          deleteAllComparison={deleteAllComparison}
        />
      )}
    </section>
  );
};

export default ListingProducts;
