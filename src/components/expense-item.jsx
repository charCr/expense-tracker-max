import classes from './expense-item.module.css';

export const ExpenseItem = ({ title, date, amount }) => {

const month = date.toLocaleString('en-US', {month: 'long'});
const day = date.toLocaleString('en-US', {day: '2-digit'});
const year = date.toLocaleString('en-US', {year: 'numeric'});

  return (
    <div className={classes.expense_item}>
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className={classes.expense_item__description}>
        <h2>{title}</h2>
      </div>
      <div className={classes.expense_item__price}>{amount}</div>
    </div>
  )
}


