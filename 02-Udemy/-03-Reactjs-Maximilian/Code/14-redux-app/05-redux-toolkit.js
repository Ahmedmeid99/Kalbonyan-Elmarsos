import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

import "./style/counter-redux.css";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, show: true },
  reducers: {
    addOne(state) {
      state.counter++;
    },
    removeOne(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = action.payload; // payload to use eny parm in dispatch (method)
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});
// normal Redux
// const store = createStore(counterReducer);

// Redux toolkit
const store = configureStore({
  reducer: counterSlice.reducer,
});
const counterActions = counterSlice.actions;

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);
  const addOneHandler = () => {
    dispatch(counterActions.addOne());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const removeOneHandler = () => {
    dispatch(counterActions.removeOne());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
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
