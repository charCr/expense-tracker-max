import './App.css';
import { ExpenseItem } from './components/expense-item';

function App() {
  return (
    <div className="App">
      <ExpenseItem title='Walmart' date={new Date()} amount={`$78000`} />
      <ExpenseItem title='Pricesmart' date={new Date()} amount={`$40000`} />
    </div>
  );
}

export default App;
