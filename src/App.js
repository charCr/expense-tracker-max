import './App.css';
import {ExpenseList} from './components/expense-list/expense-list.component';
import {NewExpense} from './components/new-expense/new-expense.component';
function App() {
  return (
    <div className="App">
      <NewExpense/>
      <ExpenseList/>
    </div>
  );
}

export default App;
