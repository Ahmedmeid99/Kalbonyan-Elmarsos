import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";

import "./style/counter-redux.css";

const counterReducer = (state = { counter: 0, show: true }, action) => {
  if (action.type === "ADD") {
    return {
      counter: state.counter + 1,
      show: state.show,
    };
  }
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.amount,
      show: state.show,
    };
  }
  if (action.type === "REMOVE") {
    return {
      counter: state.counter - 1,
      show: state.show,
    };
  }
  if (action.type === "TOGGLE") {
    return {
      counter: state.counter,
      show: !state.show,
    };
  }

  return state;
};

const store = createStore(counterReducer);

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);
  const addOneHandler = () => {
    dispatch({ type: "ADD" });
  };
  const increaseHandler = () => {
    dispatch({ type: "INCREASE", amount: 5 });
  };
  const removeOneHandler = () => {
    dispatch({ type: "REMOVE" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };
  return (
    <main className={"counter"}>
      <h1>Redux Counter</h1>
      {show && <div className={"value"}>{counter}</div>}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "35%",
          margin: " 1rem auto",
        }}
      >
        <button onClick={addOneHandler}>+1</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={removeOneHandler}>-1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

function App() {
  return <Counter />;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
