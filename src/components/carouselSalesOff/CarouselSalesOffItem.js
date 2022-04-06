import shipping from "../../assets/saleoff/freeshipping.webp";
import fee from "../../assets/saleoff/6cuotas.webp";
import { Link } from "react-router-dom";
const CarouselSalesOffItem = ({ item, salesOffQueries, width }) => {
  return (
    <Link
      key={item.id}
      className="sales-off-section__card"
      style={{
        width: `${salesOffQueries[width]}%`,
      }}
      to={`/categoria/${item.article}/${item.id}-${item.title.split(" ").join("-")}`}
    >
      <div className="sales-off-section__images">
        <img
          className="sales-off-section__imagesProduct"
          src={item.images[0]}
          alt={item.title}
        />
        <img
          className="sales-off-section__imagesShipping"
          src={shipping}
          alt={item.title}
        />
        <img
          className="sales-off-section__imagesPayment"
          src={fee}
          alt={item.title}
        />
      </div>
      <h3 className="sales-off-section__productName">{item.title}</h3>
      <div className="sales-off-section__discountContainer">
        <h5>
          {new Intl.NumberFormat("es-AR", {
            currency: "ARS",
            style: "currency",
          }).format(item.price)}
        </h5>
        <h5>{item.saleoff}% OFF</h5>
      </div>
      <h4 className="sales-off-section__productPrice">{`${new Intl.NumberFormat(
        "es-AR",
        {
          currency: "ARS",
          style: "currency",
        }
      ).format(item.price - (item.saleoff * item.price) / 100)}`}</h4>
    </Link>
  );
};

export default CarouselSalesOffItem;
