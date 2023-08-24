import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  // here below, were passing the data we obtained from 'ExpenseForm' up to the App.js array
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // we know the structure of this data is already set as such in the 'ExpenseForm' component: 
      //     const expenseData = {
      //     title: enteredTitle,
      //     amount: enteredAmount,
      //     date: new Date(enteredDate),
      //     };
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    console.log(expenseData);
    props.onSaveData(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
      <ExpenseForm 
        onSaveExpenseData={onSaveExpenseDataHandler} 
        onCancel={stopEditingHandler}
      />
      )}
    </div>
  );
};

export default NewExpense;