import Item from "./Item";

export default function PackingList({ items, onDeleteItem }) {
  const handleDeleteItem = (id) => {
    console.log("PackageList: " + id);
    onDeleteItem(id);
  };
  return (
    <div className="list">
      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <Item onDelete={handleDeleteItem} key={item.id} item={item} />
          ))}
      </ul>
    </div>
  );
}
