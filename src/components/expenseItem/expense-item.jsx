import './expense-item.styles.css';
import {ExpenseDate} from '../expense-date/expense-date.component';
import {Card} from '../../shared/components/card/card.component';
export const ExpenseItem = (props) => {

  return (
    <Card className="expense_item">
      <ExpenseDate date={props.date}/>
      <div className="expense_item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense_item__price">{props.amount}</div>
    </Card>
  )
}


