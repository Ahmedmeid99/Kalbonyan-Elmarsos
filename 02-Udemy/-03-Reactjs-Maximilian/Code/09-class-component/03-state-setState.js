import React, { useState, Component } from "react";
import ReactDOM from "react-dom/client";
import "./style/user-app.css";

//////////////////////////////////////////
// first class Component
//////////////////////////////////////////
class App extends Component {
  render() {
    return (
      <div>
        <Users />
      </div>
    );
  }
}
//////////////////////////////////////////

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
        {this.state.showUsers && <UsersList />}
      </div>
    );
  }
}
class UsersList extends Component {
  state = {
    DUMMY_USERS: [
      { id: "u1", name: "Max" },
      { id: "u2", name: "Manuel" },
      { id: "u3", name: "Julie" },
    ],
  };

  render() {
    return (
      <ul>
        {this.state.DUMMY_USERS.map((user) => (
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
