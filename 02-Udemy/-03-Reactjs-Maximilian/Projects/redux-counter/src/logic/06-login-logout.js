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
const loginSlice = createSlice({
  name: "login",
  initialState: { isLogIn: false, information: {} },
  reducers: {
    setIsLogIn(state) {
      state.isLogIn = true;
    },
    setIsLogOute(state) {
      state.isLogIn = false;
    },
  },
});
// normal Redux
// const store = createStore(counterReducer);

// Redux toolkit
const store = configureStore({
  reducer: { counter: counterSlice.reducer, logIn: loginSlice.reducer },
});
const counterActions = counterSlice.actions;
const logInActions = loginSlice.actions;

const UserProfile = () => {
  return (
    <main className={"profile"}>
      <h2>My User Profile</h2>
    </main>
  );
};
const Header = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logInActions.setIsLogOute());
  };
  return (
    <header className={"header"}>
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
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Auth = () => {
  const dispatch = useDispatch();
  const handleLogIn = () => {
    dispatch(logInActions.setIsLogIn());
  };
  return (
    <main className={"auth"}>
      <section>
        <form>
          <div className={"control"}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={"control"}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={handleLogIn}>Login</button>
        </form>
      </section>
    </main>
  );
};
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  // => reducer: {counter:counterSlice.reducer,logIn: loginSlice.reducer}
  const show = useSelector((state) => state.counter.show);
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
  const isLogin = useSelector((state) => state.logIn.isLogIn);
  // login =>reducer: {counter:counterSlice.reducer,logIn: loginSlice.reducer}
  return (
    <React.Fragment>
      {isLogin && <Header />}
      {!isLogin && <Auth />}
      {isLogin && <Counter />}
    </React.Fragment>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
