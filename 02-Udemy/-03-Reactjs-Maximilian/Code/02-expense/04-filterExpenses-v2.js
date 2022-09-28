import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

//////////////////////////////////////////
const DUMMY_EXPENSES = [
  { id: "e1", title: "car", amount: 233, date: new Date(2021, 3, 28) },
  { id: "e2", title: "wood", amount: 109, date: new Date(2019, 7, 9) },
  { id: "e3", title: "course", amount: 130, date: new Date(2022, 1, 35) },
  { id: "e4", title: "chair", amount: 27, date: new Date(2021, 7, 12) },
  { id: "e5", title: "wall", amount: 27, date: new Date(2021, 3, 2) },
];
const App = () => {
  const [expenses, setexpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setexpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h1>Let`s get started</h1>
      <NewEpense onAddExpense={addExpenseHandler} />
      <List listData={expenses} />
    </div>
  );
};
const NewEpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseDate = {
      ...enteredExpenseDate,
      id: Math.floor(Math.random() * 1000000),
    };
    props.onAddExpense(expenseDate);
  };
  return (
    <div>
      <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
    </div>
  );
};
//////////////////////////////////////////
const ExpenseForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveExpenseDate(newExpense);
    setEnteredTitle(" ");
    setEnteredAmount(" ");
    setEnteredDate(" ");
  };
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={EnteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="btn-container">
          <button className="btn">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
//////////////////////////////////////////
const List = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredExpenses = props.listData.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="list">
      <FilterYears
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};
//////////////////////////////////////////
const FilterYears = (props) => {
  const deopdownChangHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="flex">
      <label className="filter__title">Filter by year</label>
      <select
        value={props.selected}
        onChange={deopdownChangHandler}
        className="select"
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};
//////////////////////////////////////////

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
    <div className="list-item">
      <ExpenseDate date={props.date} />
      <div className="list-item-box">
        <h2 className="list-item__title">{title}</h2>
        <div className="list-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Update</button>
    </div>
  );
};
//////////////////////////////////////////
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="list-item-date">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </div>
  );
};
//////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
///////////////////////////////
reportWebVitals();
