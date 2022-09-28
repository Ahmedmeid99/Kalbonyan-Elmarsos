import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom/client";
import "./style/user-app.css";
import reportWebVitals from "./reportWebVitals";
//////////////////////////////////////////
//////////////////////////////////////////
class ErrorHandle extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return (
        <p className="error">
          404 <sub>error</sub>
        </p>
      );
    }
    return this.props.children;
  }
}
//////////////////////////////////////////
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
//////////////////////////////////////////
const UsersContext = React.createContext({
  users: DUMMY_USERS,
});
function App() {
  return (
    <UsersContext.Provider
      value={{
        users: DUMMY_USERS,
      }}
    >
      <UserFinder />
    </UsersContext.Provider>
  );
}

class UserFinder extends Component {
  static contextType = UsersContext;
  state = {
    filteredUsers: [],
    searchTerm: "",
  };

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={"finder"}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorHandle>
          <Users users={this.state.filteredUser} />
        </ErrorHandle>
      </Fragment>
    );
  }
}
class Users extends Component {
  state = {
    showUsers: true,
    more: "Test",
  };

  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT!
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={"users"}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount!");
  }

  render() {
    return <li className={"user"}>{this.props.name}</li>;
  }
}
//////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
///////////////////////////////
reportWebVitals();
