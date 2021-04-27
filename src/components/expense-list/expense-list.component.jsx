import { ExpenseItem } from '../expenseItem/expense-item'
import './expense-list.styles.css'
import {Card} from '../../shared/components/card/card.component';

export const ExpenseList = () => {
    return (
        <Card className='expenses'>
            <ExpenseItem title='Walmart' date={new Date()} amount={`$78000`} />
            <ExpenseItem title='Pricesmart' date={new Date()} amount={`$40000`} />
            <ExpenseItem title='Pricesmart' date={new Date()} amount={`$40000`} />
            <ExpenseItem title='Pricesmart' date={new Date()} amount={`$40000`} />
        </Card>
    )
}