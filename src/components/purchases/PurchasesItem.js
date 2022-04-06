import React from "react";

const PurchasesItem = ({ item }) => {
  return (
    <div className="purchase-item">
      <h3>Datos de la compra</h3>
      <div className="purchase-item-data">
        <h4>Productos:</h4>
        <div className="purchase-item-data-products">
          {item.products.map((product, index) => (
            <div key={index} className="purchase-item-data-product">
              <div className="purchase-item-data-productTitle">
                <h5>{product.title}</h5>
              </div>
              <div className="purchase-item-data-productPrice">
                <h5>Unidades: {product.unites}</h5>
                <h5>
                  Precio:{" "}
                  {new Intl.NumberFormat("es-AR", {
                    currency: "ARS",
                    style: "currency",
                  }).format(product.price)}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="purchase-item-total">
        <h4>Fecha:{item.date}</h4>
        <h3>Total: {new Intl.NumberFormat("es-AR", {
                    currency: "ARS",
                    style: "currency",
                  }).format(item.total)}</h3>
      </div>
    </div>
  );
};

export default PurchasesItem;
