import React, { useState } from 'react';
import './expenses.styles.css';
import { Card } from '../../shared/components/card/card.component';
import { ExpenseFilter } from '../expense-filter/expense-filter.component';
import { ExpenseList } from '../expenses/expense-list/expense-list.component';

export const Expenses = (props) => {
  const [expenseYear, setExpenseYear] = useState('2021');

  const handleAdditionSelectedYear = (selectedYear) => {
    setExpenseYear(selectedYear);
  };

  const arrayOfMatchingExpenses = props.items.filter((expenseItem) => {
    return expenseItem.date.getFullYear().toString() === expenseYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={expenseYear}
          onAddSelectedYear={handleAdditionSelectedYear}
        />
        <ExpenseList expenseItems={arrayOfMatchingExpenses} />
      </Card>
    </div>
  );
};
