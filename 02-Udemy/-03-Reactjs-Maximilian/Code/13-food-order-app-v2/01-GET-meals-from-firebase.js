import React, {
  useState,
  useContext,
  useRef,
  useReducer,
  useEffect,
  Fragment,
} from "react";
import ReactDOM from "react-dom/client";
import PortalReactDOM from "react-dom";
import "./style/food-order-app.css";
import mealsImage from "./gallery-9.jpg";
// import mealsImage from "./meal-1.jpg";

//////////////////////////////////////////
//////////////////////////////////////////

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
function App() {
  const [cartState, setCart] = useState(false);
  const handleOpenCart = () => {
    setCart(true);
  };
  const handleCloseCart = () => {
    setCart(false);
  };
  return (
    <CartProvider>
      {cartState && <Cart onCloseCart={handleCloseCart} />}
      <Header onOpenCart={handleOpenCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
const Header = (props) => {
  return (
    <Fragment>
      <header className={"header"}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onOpenCart={props.onOpenCart} />
      </header>
      <div className={"main-image"}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const { items } = ctx;
  const numberOfCartItem = items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  let btnClasses = `button ${btnIsHighlighted ? `bump` : ` `}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => setBtnIsHighlighted(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button onClick={props.onOpenCart} className={btnClasses}>
      <span className={"icon"}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={"badge "}>{numberOfCartItem}</span>
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

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchingMeals();
  }, []);

  const fetchingMeals = async () => {
    setLoading(true);
    try {
      const request = await fetch(
        "https://react-http-f4f9d-default-rtdb.firebaseio.com/meals.json"
      );
      if (!request.ok) {
        throw new Error("error =>");
      }
      const response = await request.json();
      const dataKey = "-N7q-HFsNXvLHr8Wso_A";
      const dataObject = response[dataKey];
      const myArray = [];

      for (const key in dataObject) {
        myArray.push({
          id: dataObject[key].id,
          name: dataObject[key].name,
          description: dataObject[key].description,
          price: dataObject[key].price,
        });
      }
      setMeals(myArray);
    } catch (e) {
      setError(true);
      setLoading(false);
      console.log(e);
    }
    setLoading(false);
  };

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={"meals"}>
      <Card>
        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
        {error && (
          <p style={{ textAlign: "center", color: "red" }}>
            SomeThing went wrong!
          </p>
        )}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$ ${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    console.log(ctx.items);
  };
  return (
    <li className={"meal"}>
      <div>
        <h3>{props.name}</h3>
        <div className={"description"}>{props.description}</div>
        <div className={"price"}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddHandler={addToCartHandler} />
      </div>
    </li>
  );
};

const MealItemForm = (props) => {
  const [isValid, setIsvalid] = useState(true);

  const amountInputRef = useRef("");
  const SubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmount);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 1
    ) {
      setIsvalid(false);
      return;
    }
    props.onAddHandler(enteredAmountNumber);
  };
  return (
    <form className={"form"} onSubmit={SubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {PortalReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        portalElement
      )}
      {PortalReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
const Backdrop = (props) => {
  return <div className={"backdrop"} onClick={props.onCloseCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={"modal"}>
      <div className={"content"}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={"cart-items"}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={"total"}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={"actions"}>
        <button onClick={props.onCloseCart} className={"button--alt"}>
          Close
        </button>
        <button className={"button"}>Order</button>
      </div>
    </Modal>
  );
};
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={"cart-item"}>
      <div>
        <h2>{props.name}</h2>
        <div className={"summary"}>
          <span className={"price"}>{price}</span>
          <span className={"amount"}>x {props.amount}</span>
        </div>
      </div>
      <div className={"actions"}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

const Card = (props) => {
  return <div className={"card"}>{props.children}</div>;
};
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={"input"}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

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
