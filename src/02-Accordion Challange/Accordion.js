import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ items }) {
  const [active, setActive] = useState(null);
  const handleSetActive = (number) => {
    setActive((prevActive) => (number === prevActive ? null : number));
  };
  return (
    <ul className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          title={item.title}
          number={index + 1}
          key={index + 1}
          active={active}
          onSetActive={handleSetActive}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        title="Test Item"
        number={32}
        key={32}
        active={active}
        onSetActive={handleSetActive}
      >
        <ul>
          <li>Test Item 1</li>
          <li>Test Item 2</li>
          <li>Test Item 3</li>
          <li>Test Item 4</li>
          <li>Test Item 5</li>
        </ul>
      </AccordionItem>
    </ul>
  );
}

export default Accordion;
