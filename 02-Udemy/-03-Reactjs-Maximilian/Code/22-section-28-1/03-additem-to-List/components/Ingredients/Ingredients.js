import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [listState, setListState] = useState([]);
  const listHandler = (enteredObject) => {
    setListState((prevState) => {
      return [...prevState, enteredObject];
    });
  };
  console.log(listState);
  return (
    <div className="App">
      <IngredientForm listFun={listHandler} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList ingredients={listState} onRemoveItem={() => {}} />
      </section>
    </div>
  );
}

export default Ingredients;
