import classes from './expense-item.module.css';
import {ExpenseDate} from '../expense-date/expense-date.component';
export const ExpenseItem = (props) => {



  return (
    <div className={classes.expense_item}>
      <ExpenseDate date={props.date}/>
      <div className={classes.expense_item__description}>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.expense_item__price}>{props.amount}</div>
    </div>
  )
}


