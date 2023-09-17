export default function Item({ item, onDelete }) {
  const handleDeleteItem = (id) => {
    console.log("Item: " + id);
    onDelete(id);
  };
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDeleteItem.bind(null, item.id)}>❌</button>
    </li>
  );
}
