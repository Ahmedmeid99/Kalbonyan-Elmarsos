import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const App=()=> {
  return (
    <div>
      <h1>Let`s get started</h1>
      <List />
    </div>
  );
}
const List=() =>{
  const listData = [
    { title: "car", amount: 233 },
    { title: "wood", amount: 109 },
    { title: "course", amount: 130 },
    { title: "chair", amount: 27 },
  ];
  return (
    <div className="list">
      <ExpenseItem
        title={listData[0].title}
        amount={listData[0].amount}
        date={new Date(2021, 3, 12)}
      />
      <ExpenseItem
        title={listData[1].title}
        amount={listData[1].amount}
        date={new Date(2021, 5, 7)}
      />
      <ExpenseItem
        title={listData[2].title}
        amount={listData[2].amount}
        date={new Date(2021, 10, 25)}
      />
      <ExpenseItem
        title={listData[3].title}
        amount={listData[3].amount}
        date={new Date(2021, 11, 2)}
      />
    </div>
  );
}

const ExpenseItem=(props)=> {
  return (
    <div className="list-item">
      <ExpenseDate date={props.date} />
      <div className="list-item-box">
        <h2 className="list-item__title">{props.title}</h2>
        <div className="list-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
const ExpenseDate=(props)=> {
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
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
///////////////////////////////
reportWebVitals();
