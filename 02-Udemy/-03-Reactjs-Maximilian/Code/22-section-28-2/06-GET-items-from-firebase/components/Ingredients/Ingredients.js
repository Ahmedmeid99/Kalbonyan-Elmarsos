import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [listState, setListState] = useState([]);
  useEffect(() => {
    fetch(
      "https://react-http-f4f9d-default-rtdb.firebaseio.com/ingredient.json"
    )
      .then((response) => response.json())
      .then((data) => {
        let ingredientsArray = [];
        for (let key in data) {
          ingredientsArray.push({
            id: key,
            title: data[key].title,
            amount: data[key].amount,
          });
        }
        setListState(ingredientsArray);
      });
  }, []);
  const addItemHandler = (enteredObject) => {
    fetch(
      "https://react-http-f4f9d-default-rtdb.firebaseio.com/ingredient.json",
      {
        method: "POST",
        body: JSON.stringify(enteredObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then(() => {
        setListState((prevState) => {
          return [...prevState, enteredObject];
        });
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
        <Search listState={listState} />
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
