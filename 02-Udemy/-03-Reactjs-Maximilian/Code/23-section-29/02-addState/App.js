import React, { useState } from "react";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full React course" />
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop />}
    </div>
  );
}

export default App;
