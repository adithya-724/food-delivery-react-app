import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <>
      <button className={styles.btn} onClick={props.onClick}>
        <span className={styles.group}>
          <span className={styles["cart-icon"]}>
            <FiShoppingCart />
          </span>
          <span className={styles.text}>Cart</span>
        </span>
        <span className={styles.items}>3</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
