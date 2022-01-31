import Header from "./components/Header/Header";
import MealWrapper from "./components/Meals/MealWrapper";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(false);

  const showCartHandler = (props) => {
    setDisplay(true);
  };
  const hideCartHandler = (props) => {
    setDisplay(false);
  };
  return (
    <div>
      {display && <Cart onClose={hideCartHandler} />}
      <Header onClick={showCartHandler} />
      <main>
        <MealWrapper />
      </main>
    </div>
  );
}

export default App;
