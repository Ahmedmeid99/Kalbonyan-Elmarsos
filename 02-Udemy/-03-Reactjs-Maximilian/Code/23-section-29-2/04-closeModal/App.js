import React, { useState } from "react";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const removeHandler = () => {
    setModalIsOpen(true);
  };
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" onRemove={removeHandler} />
      <Todo text="Master React" onRemove={removeHandler} />
      <Todo text="Explore the full React course" onRemove={removeHandler} />
      {modalIsOpen && <Modal onClose={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
}

export default App;
