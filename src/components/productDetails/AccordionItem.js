import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const AccordionItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-list-item">
      <div className="accordion-list-item__title" onClick={()=>setOpen(!open)}>
        <h4>{item.title}</h4>
        <div style={{ transform:`rotate(${ open ? "180deg" : "0deg" })` }}>
          <IoIosArrowDown color="black" size={32} />
        </div>
      </div>
      <div  className="accordion-list-item__esp" style={{ display: open ? "block" : "none" }}>
        <p>{item.especifications1}</p>
      </div>
      <div  className="accordion-list-item__esp" style={{ display: open ? "block" : "none" }}>
        <p>{item.especifications2}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
