import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <Item
              onToggleItem={onToggleItem}
              onDeleteItem={onDeleteItem}
              key={item.id}
              item={item}
            />
          ))}
      </ul>
    </div>
  );
}
