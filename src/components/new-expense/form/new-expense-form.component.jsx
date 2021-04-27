import React from 'react';
import './new-expense-form.styles.css'

export const NewExpenseForm = () => {
    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                <label htmlFor="">Title</label>
                    <input type="text"/>
                </div>
                <div className="new-expense__controls">
                <label htmlFor="">Amount</label>
                    <input type="amount"/>
                </div>
                <div className="new-expense__controls">
                <label htmlFor="">Date</label>
                    <input type="date"/>
                </div>
            </div>
            <div className="new-expense__actions">
            <button>Add Expense</button>
            </div>
        </form>
    )
}