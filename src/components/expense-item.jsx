import classes from './expense-item.module.css';

export const ExpenseItem = () => (
  <div className={classes.expense_item}>
    <div className={classes.expense_item__description}>Date</div>
    <div>
      <h2>Title</h2>
    </div>
    <div className={classes.expense_item__price}>Amount</div>
  </div>
);
