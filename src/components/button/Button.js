import React from "react";

const Button = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};

export default Button;
