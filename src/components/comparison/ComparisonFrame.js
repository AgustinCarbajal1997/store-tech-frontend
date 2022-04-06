const ComparisonFrame = ({ fields }) => {
  return (
    <div className="comparison-container">
      <div className="comparison-products">
        <div className="comparison-products-data">
          <div className="comparison-products-data-title">
            <h3>Estás comparando los siguientes productos</h3>
          </div>
          {Object.entries(fields)
            .slice(0, 1)
            .map((field) =>
              field[1].map((item) => (
                <div
                  className="comparison-products-data-products"
                  key={item.id}
                >
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                  <h5>$ {item.price}</h5>
                  <button>COMPRAR</button>
                </div>
              ))
            )}
        </div>
        {Object.entries(fields)
          .slice(1)
          .map((field, idx) => (
            <div key={idx} className="comparison-products-fields">
              <div className="comparison-products-fieldsCompare">
                <h5>{field[0].split("_").join(" ").toUpperCase()}</h5>
              </div>
              {field[1].map((item, idx) => (
                <div key={idx} className="comparison-products-fieldsItem">
                  <h6>{item}</h6>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ComparisonFrame;
