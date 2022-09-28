import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style/users.css";
import reportWebVitals from "./reportWebVitals";

//////////////////////////////////////////
const App = (props) => {
  return (
    <div>
      <UserForm />
    </div>
  );
};
const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const addUser = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    console.log(name, age);
    setName("");
    setAge("");
  };
  const handleUserName = (e) => {
    setName(e.target.value);
  };
  const handleUserAge = (e) => {
    setAge(e.target.value);
  };
  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-content">
          <label className="label">
            <p className="text">Your Name</p>
            <input type="text" value={name} onChange={handleUserName} />
          </label>
          <label className="label">
            <p className="text">Your Age</p>
            <input type="number" value={age} onChange={handleUserAge} />
          </label>
        </div>
        <div className="btn-container">
          <button className="button">Add User</button>
        </div>
      </form>
    </Card>
  );
};
const Card = (props) => {
  return <div className="card">{props.children}</div>;
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
