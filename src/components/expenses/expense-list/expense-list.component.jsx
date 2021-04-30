import React from 'react';
import { ExpenseItem } from '../../expenseItem/expense-item';
import './expense-list.styles.css';

export const ExpenseList = (props) => {
  const expensesContent = (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  );

  if (props.expenseItems.length === 0) {
    return expensesContent;
  }

  return (
    <ul className="expenses-list">
      {props.expenseItems.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          title={expenseItem.title}
          amount={`₡${expenseItem.amount}`}
          date={expenseItem.date}
        />
      ))}
    </ul>
  );
};
