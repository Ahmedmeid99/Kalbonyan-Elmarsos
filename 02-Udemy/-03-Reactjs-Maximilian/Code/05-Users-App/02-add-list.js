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
  const addUser = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    props.setuserData((prevState) => [...prevState, { name: name, age: age }]);
    // console.log(name, age);
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
    <div>
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
      </Card>
    </div>
  );
};
const List = (props) => {
  return (
    <Card className={"list"}>
      <ul className="list-items">
        {props.list.map((listItem) => (
          <li key={props.name}>
            {listItem.name} {listItem.age} (Years old)
          </li>
        ))}
      </ul>
    </Card>
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
