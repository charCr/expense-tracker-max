import React, { useState } from 'react';
import { NewExpenseForm } from './form/new-expense-form.component';
import './new-expense.styles.css';

export const NewExpense = (props) => {
const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    const savedExpenseData = { ...expenseData, id: Math.random().toString() };
    console.log(expenseData);
    props.onAddExpense(savedExpenseData);
  };

const handleDisplayForm = () => {
    setDisplayForm(true)
}

const hideForm = () => {
    setDisplayForm(false)
}

  return (
    <div className="new-expense">
        {!displayForm && (<button onClick={handleDisplayForm}>Add Expense</button>)}
      {displayForm && <NewExpenseForm onHideForm={hideForm} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};
