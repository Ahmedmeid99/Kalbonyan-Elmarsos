import ReactDOM from "react-dom/client";
import React, { useState, useRef } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import classes from "./style/auth.module.css";
/***************************************/
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isLogedIn: !!localStorage.getItem("token"),
  },
  reducers: {
    login(state, action) {
      state.token = action.payload;
      state.isLogedIn = !!state.token;
      localStorage.setItem("token", action.payload);
    },
    logout(state) {
      state.token = "";
      state.isLogedIn = !!state.token;
      localStorage.removeItem("token");
    },
  },
});
const store = configureStore({
  reducer: { auth: authSlice.reducer },
});
const authActions = authSlice.actions;

function App() {
  const isLogedIn = useSelector((state) => state.auth.isLogedIn);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        {isLogedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        {isLogedIn && <Redirect to="/auth" />}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}
/***************************************/
const HomePage = () => {
  return <StartingPageContent />;
};
/***************************************/
const AuthPage = () => {
  return <AuthForm />;
};
/***************************************/
const ProfilePage = () => {
  return <UserProfile />;
};
/***************************************/
const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};
/***************************************/
const ProfileForm = () => {
  const history = useHistory();
  const passwordEl = useRef("");
  const tokenValue = useSelector((state) => state.auth.token);

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength={6}
          ref={passwordEl}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};
/***************************************/
const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};
/***************************************/
const MainNavigation = () => {
  const isLogedInValue = useSelector((state) => state.auth.isLogedIn);
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
    history.replace("/auth");
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLogedInValue && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLogedInValue && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLogedInValue && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
/***************************************/
const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  );
};
/***************************************/
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const API_KEY = "AIzaSyBJoRsFfMhVUlhUiVGN4LosbhWSVEWPClk";
    setIsLoading(true);
    if (isLogin) {
    } else {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
            returnSecureToken: true,
          }),
          header: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          //....
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
        }
      });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};
/***************************************/
/***************************************/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
