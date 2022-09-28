import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import "./style/login-app.css";
import reportWebVitals from "./reportWebVitals";

//////////////////////////////////////////
const App = () => {
  return (
    <>
      <Counter />
    </>
  );
};
const intiailState = { count: 0 };

const reducer = (state, action) => {
  if (action.type === "add-one") {
    return { count: state.count + 1 };
  } else if (action.type === "remove-one") {
    return { count: state.count - 1 };
  } else {
    return { count: intiailState.count };
    // throw new Error();
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, intiailState);

  return (
    <Container>
      <CounterNumber>{state.count}</CounterNumber>
      <div className="control-btn">
        <Button onClick={() => dispatch({ type: "add-one" })}>+1</Button>
        <Button onClick={() => dispatch({ type: "" })}>reset</Button>
        <Button onClick={() => dispatch({ type: "remove-one" })}>-1</Button>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 200px;
  height: 200px;
  text-align: center;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  justify-content: center;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 30%);
`;
const CounterNumber = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;
const Button = styled.button`
  border: none;
  background: steelblue;
  color: white;
  padding: 7px 15px;
  margin: 3px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background: #205a8b;
  }
`;
//////////////////////////////////////////
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
///////////////////////////////
reportWebVitals();
