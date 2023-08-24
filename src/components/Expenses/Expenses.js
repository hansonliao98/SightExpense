import './Expenses.css';
import React from 'react'
// import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseList from '../ExpenseList/ExpenseList';
import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('')
  const handleOnSaveFilteredYear = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className='expenses'>
        <ExpenseFilter 
          selected={filteredYear} 
          onSaveFilteredYear={handleOnSaveFilteredYear} 
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  )
}

export default Expenses

// THIS IS HOW I PERSONALLY DID IT ===================================================================
// import ExpenseItem from './ExpenseItem';
// import './Expenses.css';
// import React from 'react'
// // import Card from '../UI/Card'
// import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
// import { useState } from 'react';
// import Card from '../UI/Card';

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState('')
//   const handleOnSaveFilteredYear = (selectedYear) => {
//     setFilteredYear(selectedYear)
//     console.log(selectedYear);
//   };

//   if (filteredYear.length === 0 ) {
//     return (
//       <div>
//       <Card>
//         <ExpenseFilter selected={filteredYear} onSaveFilteredYear={handleOnSaveFilteredYear} />
//         {props.items.map(expense => (
//           <ExpenseItem 
//             key={expense.id} //This is JUST for react to make sense, this isn't ours to use
//             title={expense.title} 
//             amount={expense.amount}
//             date={expense.date}
//             />
//           )
//         )
//         }

//         {/* <div className='expenses' >
//           <ExpenseItem
//             title={props.items[0].title}
//             amount={props.items[0].amount}
//             date={props.items[0].date}
//           />
//           <ExpenseItem
//             title={props.items[1].title}
//             amount={props.items[1].amount}
//             date={props.items[1].date}
//           />
//           <ExpenseItem
//             title={props.items[2].title}
//             amount={props.items[2].amount}
//             date={props.items[2].date}
//           />
//         </div> */}
//       </Card> 
//     </div>
//     )
//   } else {
//     return (
//       <div>
//         <Card>
//           <ExpenseFilter selected={filteredYear} onSaveFilteredYear={handleOnSaveFilteredYear} />
//           {props.items.filter(item => item.date.getFullYear() == filteredYear).map(expense => (
//             <ExpenseItem 
//               key={expense.id} //This is JUST for react to make sense, this isn't ours to use
//               title={expense.title} 
//               amount={expense.amount}
//               date={expense.date}
//               />
//             )
//           )
//           }

//           {/* <div className='expenses' >
//             <ExpenseItem
//               title={props.items[0].title}
//               amount={props.items[0].amount}
//               date={props.items[0].date}
//             />
//             <ExpenseItem
//               title={props.items[1].title}
//               amount={props.items[1].amount}
//               date={props.items[1].date}
//             />
//             <ExpenseItem
//               title={props.items[2].title}
//               amount={props.items[2].amount}
//               date={props.items[2].date}
//             />
//           </div> */}
//         </Card>
//       </div>
//   )
//   }

// }

// export default Expenses