function AccordionItem({ title, children, number, onSetActive, active }) {
  let isActive = number === active;
  return (
    <li
      onClick={onSetActive.bind(null, number)}
      className={isActive ? "item open" : "item"}
    >
      <p className="number">{number < 9 ? `0${number}` : number}</p>
      <p className="title">{title}</p>
      <p className="logo">{isActive ? `-` : `+`}</p>
      {isActive && <div className="content-box">{children}</div>}
    </li>
  );
}

export default AccordionItem;
