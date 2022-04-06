import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
const Check = ({ checked, ...props }) => {
  return (
    <div
      {...props}
      style={{
        width: "22px",
        height: "22px",
        border: "1px solid #adadad",
        cursor: "pointer",
        padding:"2px", 
        backgroundColor:checked ? "#654bb9" : "transparent",
        borderRadius:"5px",
        margin:"10px 0px"
      }}
    >
      {checked && <AiOutlineCheck size={20} color="#ffffff" />}
    </div>
  );
};

export default Check;
