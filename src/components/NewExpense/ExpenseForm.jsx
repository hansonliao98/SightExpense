import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   });

  //   // saving state: ALWAYS DO THIS:
  //   setUserInput((prevState) => {
  //     return { ...prevState, enterTitle: event.target.value };
  //   })
  // };
  const titleChangeHandler = (event) => {
    console.log('title changed!')
    setEnteredTitle(event.target.value);
    console.log(event.target.value)
  }
  const amountChangeHandler = (event) => {
    console.log('amount changed!')
    setEnteredAmount(event.target.value);
    console.log(event.target.value)
  }
  const dateChangeHandler = (event) => {
    console.log('date changed!')
    setEnteredDate(event.target.value);
    console.log(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    props.onSaveExpenseData(expenseData);
  }

  return (
    
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls' >
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__Actions">
        <button type='submit'>Add Expense</button>
        <button type='button' onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  )
}

export default ExpenseForm