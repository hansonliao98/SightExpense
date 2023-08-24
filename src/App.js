import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import { useCallback, useEffect, useState } from "react";

const DUMMY_EXPENSES = [
  // {
  //   id: "e1",
  //   title: "Toilet Paper",
  //   amount: 94.12,
  //   date: new Date(2020, 7, 14),
  // },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // GET: Display movies on website ========================================================================

  const fetchExpensesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // request server for information
      const response = await fetch(
        "https://react-app-test-c9ec0-default-rtdb.firebaseio.com/expenses.json"
      );
      // if theres an error with connection, we let user know
      if (!response.ok) {
        throw new Error("somecing wong!");
      }
      // if request was success, we parse and save the json portion of the information as 'data'
      const data = await response.json();
      console.log(data);

      // create/reset the arry empty
      const loadedExpenses = [];

      // 'key' is the id of the todo in the 'data'. each key holds multiple pieces of information
      // Fill in the 'loadedTodos' array, with an object for every key in the 'data'. Perform a for loop

      for (const key in data) {
        // 'push': method - add one of more elements to end of array and modify original array
        loadedExpenses.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
          date: new Date(data[key].date),
        });
      }
      setExpenses(loadedExpenses);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchExpensesHandler();
  }, [fetchExpensesHandler]);

  // const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    console.log("in app.js");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onSaveData={addExpenseHandler} />
      {/* props and items will trigger Different things */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
