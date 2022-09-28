import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style/users.css";
import reportWebVitals from "./reportWebVitals";

//////////////////////////////////////////
const App = () => {
  const [userData, setuserData] = useState([]);
  return (
    <div>
      <UserForm setuserData={setuserData} />
      <List list={userData} />
    </div>
  );
};

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addUser = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError(() => ({
        title: "input is empty",
        massage: "add name and age please",
      }));
      return;
    }
    if (+age < 1) {
      setError(() => ({
        title: "Invalid age",
        massage: "add valid age (age > 1)",
      }));
      return;
    }
    props.setuserData((prevState) => [...prevState, { name: name, age: age }]);
    // console.log(name, age);
    setName(" ");
    setAge(" ");
  };
  const handleUserName = (e) => {
    setName(e.target.value);
  };
  const handleUserAge = (e) => {
    setAge(e.target.value);
  };
  const handleError = () => {
    setError(null);
  };
  return (
    // => fix that
    [
      error && <ErrorModel error={error} handleError={handleError} />,
      <Card className={"form"}>
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
      </Card>,
    ]
  );
};
const List = (props) => {
  return (
    <Card className={"list"}>
      <ul className="list-items">
        {props.list.map((listItem) => (
          <li key={listItem.name}>
            {listItem.name} {listItem.age} (Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
const ErrorModel = (props) => {
  return (
    <div>
      <div className="bg" onClick={props.handleError}></div>
      <Card className={"error"}>
        <div className="error-box">
          <header>
            <h3>{props.error.title}</h3>
          </header>
          <div className="error-content">
            <p>{props.error.massage}</p>
          </div>
          <footer>
            <button className="button btn-error" onClick={props.handleError}>
              oky
            </button>
          </footer>
        </div>
      </Card>
    </div>
  );
};
const Card = (props) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
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
