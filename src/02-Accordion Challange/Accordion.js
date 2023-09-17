import AccordionItem from "./AccordionItem";

function Accordion({ items }) {
  return (
    <ul className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          title={item.title}
          text={item.text}
          number={index + 1}
          key={index + 1}
        />
      ))}
    </ul>
  );
}

export default Accordion;
