import React from "react";
import AccordionItem from "./AccordionItem";

export const Accordion = ({ data }) => {
  return (
    <div className="accordion-list">
      <h3>Especificaciones técnicas</h3>
      {data.map((item, idx) => (
        <AccordionItem item={item} key={idx} />
      ))}
    </div>
  );
};
