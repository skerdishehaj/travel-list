function Output({ bill, percentage }) {
  let tip = bill * percentage;
  let total = bill + tip;
  return (
    <h2>{`You pay $${total.toLocaleString("en-us")} ($${bill.toLocaleString(
      "en-us"
    )} + $${tip.toFixed(2).toLocaleString("en-us")})`}</h2>
  );
}

export default Output;
