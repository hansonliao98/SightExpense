import React, { useState } from 'react'

import { useEffect } from 'react'
import './ExpenseFilter.css'

// this component is just a UI filter
// 2 way binding passes the data received from this compeonent is passed into 'expenses' File to process.

const ExpenseFilter = (props) => {
  
  // const [selectedYear, setSelectedYear] = useState()

  const onChangeHandler = (event) => {
    const year = event.target.value
    // console.log(year);
    props.onSaveFilteredYear(year)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control' >
        <label className='expenses-filter' > 
          Filter by Year
        </label>
        <select value={props.selected} onChange={onChangeHandler}>
          <option value="2019" >2019</option>
          <option value="2020" >2020</option>
          <option value="2021" >2021</option>
          <option value="2022" >2022</option>
        </select>

      </div>

    </div>
  )
}

export default ExpenseFilter