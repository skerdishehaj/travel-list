import { useState } from "react";

function AccordionItem({ title, text, number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      onClick={() => {
        setIsOpen((isOpen) => !isOpen);
      }}
      className={isOpen ? "item open" : "item"}
    >
      <p className="number">{number < 9 ? `0${number}` : number}</p>
      <p className="title">{title}</p>
      <p className="logo">{isOpen ? `-` : `+`}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </li>
  );
}

export default AccordionItem;
