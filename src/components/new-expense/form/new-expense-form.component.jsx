import React, { useState } from 'react';
import './new-expense-form.styles.css';

export const NewExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    const date = event.target.value.replace(/-/g, '/');
    setDate(date);
    console.log(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    setTitle('');
    setAmount('');
    setDate('');

    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label htmlFor="">Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__controls">
          <label htmlFor="">Date</label>
          <input type="date" value={date} onChange={dateChangeHandler} />
          {console.log(date)}
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};
