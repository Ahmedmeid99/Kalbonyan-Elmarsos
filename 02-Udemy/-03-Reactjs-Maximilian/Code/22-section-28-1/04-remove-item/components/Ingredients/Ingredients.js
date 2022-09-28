import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [listState, setListState] = useState([]);
  const addItemHandler = (enteredObject) => {
    setListState((prevState) => {
      return [...prevState, enteredObject];
    });
  };
  const removeItemHandler = (ingredientId) => {
    const newIngredients = listState.filter(
      (ingredient) => ingredient.id !== ingredientId
    );
    setListState(newIngredients);
  };
  return (
    <div className="App">
      <IngredientForm listFun={addItemHandler} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList
          ingredients={listState}
          onRemoveItem={removeItemHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
