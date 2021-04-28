import React, { useState } from 'react';
import { ExpenseItem } from '../expenseItem/expense-item';
import './expense-list.styles.css';
import { Card } from '../../shared/components/card/card.component';
import { ExpenseFilter } from '../expense-filter/expense-filter.component';

export const ExpenseList = (props) => {
  const [expenseYear, setExpenseYear] = useState('2021');

  const handleAdditionSelectedYear = (selectedYear) => {
    setExpenseYear(selectedYear);
  };

  return (
    <div>
      {console.log(expenseYear)}

      <Card className="expenses">
        <ExpenseFilter
          selected={expenseYear}
          onAddSelectedYear={handleAdditionSelectedYear}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={`$${expense.amount}`}
          />
        ))}
      </Card>
    </div>
  );
};
