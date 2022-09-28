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
  return (
    <form>
      <div className={`form-control`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
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
