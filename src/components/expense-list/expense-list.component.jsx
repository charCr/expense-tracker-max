import { ExpenseItem } from '../expenseItem/expense-item'
import './expense-list.styles.css'

export const ExpenseList = () => {
    return (
        <div className='expenses'>
            <ExpenseItem title='Walmart' date={new Date()} amount={`$78000`} />
            <ExpenseItem title='Pricesmart' date={new Date()} amount={`$40000`} />
            <ExpenseItem title='Pricesmart' date={new Date()} amount={`$40000`} />
            <ExpenseItem title='Pricesmart' date={new Date()} amount={`$40000`} />
        </div>
    )
}