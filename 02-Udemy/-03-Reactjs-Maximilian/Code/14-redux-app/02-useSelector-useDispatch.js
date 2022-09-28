import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";

import "./style/counter-redux.css";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "ADD") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "REMOVE") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

const UserProfile = () => {
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};
const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Auth = () => {
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const addOneHandler = () => {
    dispatch({ type: "ADD" });
  };
  const removeOneHandler = () => {
    dispatch({ type: "REMOVE" });
  };
  const toggleCounterHandler = () => {};
  return (
    <main className={"counter"}>
      <h1>Redux Counter</h1>
      <div className={"value"}>{counter}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "35%",
          margin: " 1rem auto",
        }}
      >
        <button onClick={addOneHandler}>+1</button>
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
