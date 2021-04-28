import React from 'react';
import { NewExpenseForm } from './form/new-expense-form.component';
import './new-expense.styles.css';

export const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const savedExpenseData = { ...expenseData, id: Math.random().toString() };
    console.log(expenseData);
    props.onAddExpense(savedExpenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
