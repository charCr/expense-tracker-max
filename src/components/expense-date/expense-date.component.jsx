import './expense-date.styles.css';

export const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en', { month: 'long' });
  const day = props.date.toLocaleString('en', { day: '2-digit' });
  const year = props.date.toLocaleString('en', { year: 'numeric' });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
      {console.log('day: ', day, 'month: ', month, 'year: ', year)}
    </div>
  );
};
