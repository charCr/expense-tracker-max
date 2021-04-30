import React, { useState } from 'react';
import './App.css';
import { Expenses } from './components/expenses/expenses.component';
import { NewExpense } from './components/new-expense/new-expense.component';

const DUMMY_DATA = [
  {
    id: 'e4',
    title: 'Walmart',
    amount: 300,
    date: new Date('2021/08/05'),
  },
];
function App() {
  const [myExpenses, setMyExpenses] = useState(DUMMY_DATA);
  const addExpenseHandler = (expenseData) => {
    setMyExpenses((prevState) => [expenseData, ...prevState]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={myExpenses} />
    </div>
  );
}

export default App;
