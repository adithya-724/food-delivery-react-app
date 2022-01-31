import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./HeaderCartButton.module.css";
import { cartContext } from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);
  const numberOfCartItems = cartCtx.items.reduce((index, item) => {
    return index + item.amount;
  }, 0);
  return (
    <>
      <button className={styles.btn} onClick={props.onClick}>
        <span className={styles.group}>
          <span className={styles["cart-icon"]}>
            <FiShoppingCart />
          </span>
          <span className={styles.text}>Cart</span>
        </span>
        <span className={styles.items}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
