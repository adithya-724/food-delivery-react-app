import React from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import styles from "./Cart.module.css";
import { useState } from "react";

const Cart = (props) => {
  const cartItems = [{ id: "m1", name: "salad", amount: 20, price: 14.99 }];
  return (
    <Modal onClose={props.onClose}>
      <ul className={styles.items}>
        {cartItems.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <div className={styles.amount}>
        <span className={styles.label}>Amount entered</span>
        <span className={styles.price}>30</span>
      </div>
      <div className={styles["button-container"]}>
        <Button label="Order Now" type="order" />
        <Button type="secondary" label="Close" onClick={props.onClose} />
      </div>
    </Modal>
  );
};

export default Cart;
