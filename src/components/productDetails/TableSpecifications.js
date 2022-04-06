import React from "react";

const TableSpecifications = ({ data }) => {
  return (
    
      <ul className="product-view-specifications__ul">
        <h3>Especificaciones técnicas</h3>
        {data.map((esp, index) => {
          return (
            <li key={index} className="product-view-specifications__li">
              <h3>{esp.title}</h3>
              <h4>{esp.especifications1}</h4>
              <h4>{esp.especifications2}</h4>
            </li>
          );
        })}
      </ul>
    
  );
};

export default TableSpecifications;
