export default function Stats({ noOfItems, noOfPackedItems }) {
  let percentage = Math.round((noOfPackedItems / noOfItems) * 100);

  if (!noOfItems)
    return (
      <footer className="stats">
        <em>🙈 You have no items on your list. Start adding some items 🚀</em>
      </footer>
    );

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You're all set for your trip! Ready to go ✈!`
          : `
        🎁 You have ${noOfItems} items on your list, and you already packed ${noOfPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
