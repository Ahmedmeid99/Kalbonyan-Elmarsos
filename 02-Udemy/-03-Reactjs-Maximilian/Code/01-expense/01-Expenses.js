import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function ExpenseItem() {
  const expensDate = new Date(2021, 2, 28);
  const expensTitle = "car Insurance";
  const expensAmount = 294.67;
  return (
    <div className="list-item">
      <div className="list-item-date">{expensDate.toISOString()}</div>
      <div className="list-item-box">
        <h2 className="list-item__title">{expensTitle}</h2>
        <div className="list-item__price">{expensAmount}</div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ExpenseItem />
  </React.StrictMode>
);
///////////////////////////////
reportWebVitals();
