import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const NewEpense = () => {
  return (
    <div>
      <ExpenseForm />
    </div>
  );
};
const ExpenseForm = () => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(EnteredTitle);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(EnteredAmount);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(EnteredDate);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    console.log(newExpense);
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
const App = () => {
  const listData = [
    { id: "e1", title: "car", amount: 233 },
    { id: "e2", title: "wood", amount: 109 },
    { id: "e3", title: "course", amount: 130 },
    { id: "e4", title: "chair", amount: 27 },
  ];
  return (
    <div>
      <h1>Let`s get started</h1>
      <NewEpense />
      <List listData={listData} />
    </div>
  );
};
const List = (props) => {
  return (
    <div className="list">
      <ExpenseItem
        key={props.listData[0].id}
        title={props.listData[0].title}
        amount={props.listData[0].amount}
        date={new Date(2021, 3, 12)}
      />
      <ExpenseItem
        key={props.listData[1].id}
        title={props.listData[1].title}
        amount={props.listData[1].amount}
        date={new Date(2021, 5, 7)}
      />
      <ExpenseItem
        key={props.listData[2].id}
        title={props.listData[2].title}
        amount={props.listData[2].amount}
        date={new Date(2021, 10, 25)}
      />
      <ExpenseItem
        key={props.listData[3].id}
        title={props.listData[3].title}
        amount={props.listData[3].amount}
        date={new Date(2021, 11, 2)}
      />
    </div>
  );
};

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
///////////////////////////////
reportWebVitals();
