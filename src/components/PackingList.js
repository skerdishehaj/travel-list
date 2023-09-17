import { useState } from "react";
import Item from "./Item";
import Actions from "./Actions";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = items.slice();

  const handleSortBy = (sortBy) => {
    setSortBy(sortBy);
  };
  if (items.length !== 0) {
    switch (sortBy) {
      case "input":
        sortedItems = items.slice();
        break;
      case "description":
        sortedItems = items
          .slice()
          .sort((a, b) => a.description.localeCompare(b.description));
        break;
      case "packed":
        sortedItems = items
          .slice()
          .sort((a, b) => Number(a.packed) - Number(b.packed));
        break;
      default:
        break;
    }
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.length > 0 &&
          sortedItems.map((item) => (
            <Item
              onToggleItem={onToggleItem}
              onDeleteItem={onDeleteItem}
              key={item.id}
              item={item}
            />
          ))}
      </ul>
      <Actions
        sortBy={sortBy}
        onSortBy={handleSortBy}
        onClearList={onClearList}
      />
    </div>
  );
}
