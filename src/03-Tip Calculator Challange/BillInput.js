function BillInput({ bill, onGetBill, children }) {
  return (
    <form>
      <label htmlFor="bill">{children}</label>
      <input
        type="number"
        min={0}
        value={bill}
        onChange={(e) =>
          onGetBill(Number(e.target.value) ? Number(e.target.value) : "")
        }
        placeholder="Enter bill..."
      />
    </form>
  );
}

export default BillInput;
