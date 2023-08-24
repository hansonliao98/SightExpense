import React from 'react'

import ExpenseItem from '../Expenses/ExpenseItem';
import './ExpenseList.css'

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback' > Found no Expenses </h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem 
          key={expense.id} //This is JUST for react to make sense, this isn't ours to use
          title={expense.title} 
          amount={expense.amount}
          date={expense.date}
          />
        ))}
    </ul>
  );
};

export default ExpenseList