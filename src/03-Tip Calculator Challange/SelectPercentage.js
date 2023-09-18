import { useState } from "react";

function SelectPercentage({ children, percentage, onGetPercentage }) {
  return (
    <form>
      <label htmlFor="select-percentage">{children}</label>
      <select
        value={percentage}
        onChange={(e) => onGetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="0.05">It was okay (5%)</option>
        <option value="0.1">It was good (10%)</option>
        <option value="0.2">Absolutely amazing (20%)</option>
      </select>
    </form>
  );
}

export default SelectPercentage;
