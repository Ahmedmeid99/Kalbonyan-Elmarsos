import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./style/form.css";
import reportWebVitals from "./reportWebVitals";
//////////////////////////////////////////
function App() {
  return (
    <div className="app">
      <BasicForm />
    </div>
  );
}

const BasicForm = (props) => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");

  const [firstNameIsValid, setFirstNameIsValid] = useState(false);
  const [lastNameIsValid, setLastNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (firstNameValue.trim().length > 3) {
      setFirstNameIsValid("Good Work");
      setFirstNameError(false);
    } else if (firstNameValue.trim() != "") {
      setFirstNameError("most be more than 3 char");
      setFirstNameIsValid(false);
    }
    ////////////////////////////////////
    if (lastNameValue.trim().length > 3) {
      setLastNameIsValid("Good Work");
      setLastNameError(false);
    } else if (lastNameValue.trim() != "") {
      setLastNameError("most be more than 3 char");
      setLastNameIsValid(false);
    }
    ////////////////////////////////////
    if (emailValue.includes("@")) {
      setEmailIsValid("Good Work");
      setEmailError(false);
    } else if (!emailValue.includes("@") && emailValue.trim() != "") {
      setEmailError("most have @ in your email");
      setEmailIsValid(false);
    }
  }, [firstNameValue, lastNameValue, emailValue]);

  ////////////////////////////////////////////
  const handleFirstNameValue = () => {
    setFirstNameValue(firstNameRef.current.value);
  };
  const handleLastNameValue = () => {
    setLastNameValue(lastNameRef.current.value);
  };
  const handleEmailValue = () => {
    setEmailValue(emailRef.current.value);
  };
  ////////////////////////////////////////////
  const handleFirstNameValueonBlur = () => {
    if (firstNameValue.trim().length === 0) {
      setFirstNameError("most be more than 3 char");
    }
  };
  const handleLastNameValueonBlur = () => {
    if (lastNameValue.trim().length === 0) {
      setLastNameError("most be more than 3 char");
    }
  };
  const handleEmailonBlur = () => {
    if (!emailValue.includes("@")) {
      setEmailError("most have @ in your email");
    }
  };
  ////////////////////////////////////////////
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      firsName: firstNameValue,
      lasName: lastNameValue,
      email: emailValue,
    };
    console.log(userData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameError ? "invalid" : ""}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            ref={firstNameRef}
            onChange={handleFirstNameValue}
            onBlur={handleFirstNameValueonBlur}
          />
          {firstNameError && <p className="error-text">{firstNameError}</p>}
          {firstNameIsValid && <p className="done-text ">{firstNameIsValid}</p>}
        </div>
        <div className={`form-control ${lastNameError ? "invalid" : ""}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            ref={lastNameRef}
            onChange={handleLastNameValue}
            onBlur={handleLastNameValueonBlur}
          />
          {lastNameError && <p className="error-text">{lastNameError}</p>}
          {lastNameIsValid && <p className="done-text ">{lastNameIsValid}</p>}
        </div>
      </div>
      <div className={`form-control ${emailError ? "invalid" : ""}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          ref={emailRef}
          onChange={handleEmailValue}
          onBlur={handleEmailonBlur}
        />
        {emailError && <p className="error-text">{emailError}</p>}
        {emailIsValid && <p className="done-text ">{emailIsValid}</p>}
      </div>
      <div className="form-actions">
        <button
          disabled={
            firstNameIsValid && lastNameIsValid && emailIsValid ? false : true
          }
        >
          Submit
        </button>
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
