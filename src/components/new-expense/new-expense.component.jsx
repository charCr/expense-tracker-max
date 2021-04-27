import React from 'react';
import { NewExpenseForm } from './form/new-expense-form.component';
import './new-expense.styles.css'

export const NewExpense = () => {
    return (
        <div className="new-expense">
            <NewExpenseForm />
        </div>
    )
}