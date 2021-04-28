import React from 'react';
import './expense-filter.styles.css';

export const ExpenseFilter = (props) => {
  const handleSelectedYear = (event) => {
    const selectedYear = event.target.value;
    props.onAddSelectedYear(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleSelectedYear}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};
