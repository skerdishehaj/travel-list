import Item from "./Item";

export default function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.length > 0 &&
          items.map((item) => <Item key={item.id} item={item} />)}
      </ul>
    </div>
  );
}
