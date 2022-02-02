import React, { useContext, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./HeaderCartButton.module.css";
import { cartContext } from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);
  const { items } = cartCtx;
  const [isHighlighted, setIsHighlighted] = useState(false);
  const numberOfCartItems = items.reduce((index, item) => {
    return index + item.amount;
  }, 0);
  const classes = `${styles.items} ${isHighlighted ? styles.change : ""}`;
  useEffect(() => {
    if (items.length > 0) {
      setIsHighlighted(true);
    }
    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <button className={styles.btn} onClick={props.onClick}>
        <span className={styles.group}>
          <span className={styles["cart-icon"]}>
            <FiShoppingCart />
          </span>
          <span className={styles.text}>Cart</span>
        </span>
        <span className={classes}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
