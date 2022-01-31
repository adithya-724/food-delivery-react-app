import ReactDOM from "react-dom";
import CartProvider from "./store/cart-context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
