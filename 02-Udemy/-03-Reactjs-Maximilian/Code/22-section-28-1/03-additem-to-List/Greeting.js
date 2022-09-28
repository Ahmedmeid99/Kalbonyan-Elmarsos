import React, { useState } from "react";
const Greeting = () => {
  const [changed, setChanged] = useState(false);
  const changeHandler = () => {
    setChanged(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changed && <p>It is good to see you</p>}
      {changed && <p>changed</p>}
      <button onClick={changeHandler}>changeText</button>
    </div>
  );
};
export default Greeting;
