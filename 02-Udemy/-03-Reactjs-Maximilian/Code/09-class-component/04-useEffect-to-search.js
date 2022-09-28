import React, { useState, useEffect, Fragment, Component } from "react";
import ReactDOM from "react-dom/client";
import "./style/user-app.css";

//////////////////////////////////////////
// first class Component
//////////////////////////////////////////
class App extends Component {
  render() {
    return (
      <div>
        <UserFinder />
      </div>
    );
  }
}
//////////////////////////////////////////
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={"finder"}>
        <input type="search" onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

class Users extends Component {
  state = {
    showUsers: true,
  };

  toggleUsersHandler = () => {
    this.setState((prevState) => ({ showUsers: !prevState.showUsers }));
  };

  render() {
    return (
      <div className={"users"}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && <UsersList users={this.props.users} />}
      </div>
    );
  }
}
class UsersList extends Component {
  render() {
    return (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
  }
}

const User = (props) => {
  return <li className={"user"}>{props.name}</li>;
};
//////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
///////////////////////////////
