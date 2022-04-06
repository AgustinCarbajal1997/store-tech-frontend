import React from "react";
import { IoFilter } from "react-icons/io5";
const MobileFilterButton = ({ setHideFilter }) => {
  return (
    <div className="filter-button" onClick={() => setHideFilter(false)}>
      <IoFilter color="#654bb9" />
      <h4>FILTRAR</h4>
    </div>
  );
};

export default MobileFilterButton;
