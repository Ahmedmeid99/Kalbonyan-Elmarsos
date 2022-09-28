import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import classes from "./style/menu.module.css";
/***************************************/
const data = [
  { id: "1", title: "one" },
  { id: "2", title: "two" },
  { id: "3", title: "three" },
  { id: "4", title: "four" },
  { id: "5", title: "five" },
];

const ListItems = () => {
  const [close, setClose] = useState(false);
  const onClickHandler = () => {
    setClose(!close);
  };
  const closeValue = close ? "close" : "control-icon";
  return (
    <div className={classes[`list-group`]} onClick={onClickHandler}>
      <div className={classes["flex"]}>
        <h3 className={classes["list-group-title"]}>Array & object</h3>
        <div className={classes[closeValue]}></div>
      </div>
      <ul>
        {close && data.map((item) => <Item title={item.title} key={item.id} />)}
      </ul>
    </div>
  );
};
const Item = (props) => {
  return <li className={classes["list-group__item"]}>{props.title}</li>;
};
const App = () => {
  return (
    <>
      <ListItems />
      <ListItems />
    </>
  );
};
/***************************************/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
