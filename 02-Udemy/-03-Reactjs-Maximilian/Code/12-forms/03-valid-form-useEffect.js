import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./style/form.css";
import reportWebVitals from "./reportWebVitals";
//////////////////////////////////////////
function App() {
  return (
    <div className="app">
      <SimpleInput />
    </div>
  );
}
const SimpleInput = (props) => {
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    setError(false);
    if (inputValue.trim().length === 0) {
      console.log("Not Valid");
      setError("Not Valid");
      setDone(false);
    }
    if (inputValue.trim().length >= 10) {
      console.log(inputValue);
      setDone(true);
      setError(false);
    }
    if (inputValue.trim().length < 10 && inputValue.trim().length !== 0) {
      console.log("You Most Add more Than 10 char");
      setDone(false);
      setError("You Most Add more Than 10 char");
    }
  }, [inputValue]);
  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) {
      console.log("Not Valid");
      setError("Not Valid");
      setDone(false);
    }
    if (inputValue.trim().length >= 10) {
      console.log(inputValue);
      setDone(true);
      setError(false);
      setInputValue("");
    }
    if (inputValue.trim().length < 10 && inputValue.trim().length !== 0) {
      console.log("You Most Add more Than 10 char");
      setDone(false);
      setError("You Most Add more Than 10 char");
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={`form-control ${error ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={inputValue}
          ref={inputRef}
          onChange={inputValueHandler}
        />
        {error && <p className={"error-text"}>{error}</p>}
        {done && <p className={"done-text"}>Good Work</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};
const BasicForm = (props) => {
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
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
