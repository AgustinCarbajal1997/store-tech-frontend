import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Accordion } from "../productDetails/AccordionList";
import useCurrentWidth from "../../customHooks/useCurrentWidth";
import TableSpecifications from "../productDetails/TableSpecifications";
import BookMark from "./BookMark";
import ButtonsCart from "./ButtonsCart";
import Button from "../button/Button";
import { useHistory } from "react-router-dom";

const ProductModel = ({ item }) => {
  const dataUser = useSelector((state) => state.auth.dataUser);
  const access_token = useSelector((state) => state.auth.access_token);
  const dispatch = useDispatch();
  const [currentImg, setCurrentImg] = useState(0);
  const witdh = useCurrentWidth();
  const history = useHistory();
  return (
    <>
      <div className="product-view-carousel">
        <div className="product-view-carousel__bigImage">
          <img src={item.images[currentImg]} alt={item.title} />
        </div>
        <div className="product-view-carousel__previewPics">
          {item.images.map((img, index) => {
            return (
              <img
                src={img}
                alt={item.title}
                key={index}
                onClick={() => setCurrentImg(index)}
              />
            );
          })}
        </div>
      </div>
      <div className="product-view-title-info">
        {dataUser && (
          <BookMark
            dataUser={dataUser}
            productId={item.id}
            dispatch={dispatch}
            access_token={access_token}
          />
        )}
        {item.brand.image ? (
          <img
            src={item.brand.image}
            alt="logo"
            style={{ height: "32px", width: "auto" }}
          />
        ) : (
          <h2 style={{ margin: 0 }}>{item.brand.name.toUpperCase()}</h2>
        )}
        <h2>{item.title}</h2>
        {item.saleoff > 0 && (
          <div className="product-view-title-info--highlighted">
            <h5>
              {new Intl.NumberFormat("es-AR", {
                currency: "ARS",
                style: "currency",
              }).format(item.price)}
            </h5>
            <h5>{item.saleoff}% OFF</h5>
          </div>
        )}
        {item.highlighted > 0 && (
          <div className="product-view-title-info--highlighted">
            <h5>
              {new Intl.NumberFormat("es-AR", {
                currency: "ARS",
                style: "currency",
              }).format(item.price)}
            </h5>
            <h5>{item.highlighted}% OFF</h5>
          </div>
        )}
        {!item.highlighted && !item.saleoff && (
          <h3>
            {new Intl.NumberFormat("es-AR", {
              currency: "ARS",
              style: "currency",
            }).format(item.price)}
          </h3>
        )}
        {item.highlighted > 0 && (
          <h3>{`${new Intl.NumberFormat("es-AR", {
            currency: "ARS",
            style: "currency",
          }).format(item.price - (item.highlighted * item.price) / 100)}`}</h3>
        )}
        {item.saleoff > 0 && (
          <h3>{`${new Intl.NumberFormat("es-AR", {
            currency: "ARS",
            style: "currency",
          }).format(item.price - (item.saleoff * item.price) / 100)}`}</h3>
        )}
        {dataUser ? (
          <ButtonsCart item={item} />
        ) : (
          <Button
            title="Agregar al carrito"
            onClick={() => history.push("/iniciar-sesion")}
          />
        )}
      </div>
      <div className="product-view-specifications">
        <h2>{item.title}</h2>
        {witdh === "xs" || witdh === "sm" ? (
          <Accordion data={item.specifications} />
        ) : (
          <TableSpecifications data={item.specifications} />
        )}
      </div>
      <div className="product-view-features">
        <h3>Descripción</h3>
        <ul className="product-view-features__ul">
          {item.description.map((desc, index) => {
            return (
              <li key={index} className="product-view-features__li">
                <h3>{desc.title}</h3>
                <p>{desc.paragraph}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProductModel;
