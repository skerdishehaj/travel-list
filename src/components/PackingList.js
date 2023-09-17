import Item from "./Item";

export default function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <Item onDelete={onDeleteItem} key={item.id} item={item} />
          ))}
      </ul>
    </div>
  );
}
