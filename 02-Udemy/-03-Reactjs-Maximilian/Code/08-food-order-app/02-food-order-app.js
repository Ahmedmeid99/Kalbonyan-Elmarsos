import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./style/food-order-app.css";
import mealsImage from "./gallery-9.jpg";
// import mealsImage from "./meal-1.jpg";
import reportWebVitals from "./reportWebVitals";

//////////////////////////////////////////
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}
const Header = (props) => {
  return (
    <Fragment>
      <header className={"header"}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={"main-image"}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

const HeaderCartButton = (props) => {
  return (
    <button className={"button"}>
      <span className={"icon"}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={"badge"}>3</span>
    </button>
  );
};
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};
const MealsSummary = () => {
  return (
    <section className={"summary"}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={"meals"}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
const MealItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;
  return (
    <li className={"meal"}>
      <div>
        <h3>{props.name}</h3>
        <div className={"description"}>{props.description}</div>
        <div className={"price"}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

// const Meal

const Card = (props) => {
  return <div className={"card"}>{props.children}</div>;
};

const CartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
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
