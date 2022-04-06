import React from "react";
import CategoryProducts from "../components/categoryProducts/CategoryProducts";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
const Category = () => {
  return (
    <>
      <BreadCrumb bgColor={"#f5f5f5"}/>
      <CategoryProducts />
      
    </>
  );
};

export default Category;
