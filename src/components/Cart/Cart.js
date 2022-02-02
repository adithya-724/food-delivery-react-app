import { cartContext } from "../../store/cart-context";
import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.amount.toFixed(2)}`;
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};
  return (
    <Modal onClose={props.onClose}>
      <ul className={styles.items}>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              price={item.price}
              name={item.name}
              amount={item.amount}
              onAdd={addItemHandler.bind(null, item)}
              onRemove={removeItemHandler.bind(null, item.id)}
            />
          );
        })}
      </ul>
      <div className={styles.amount}>
        <span className={styles.label}>Amount entered</span>
        <span className={styles.price}>{totalAmount}</span>
      </div>
      <div className={styles["button-container"]}>
        {hasItems && <Button label="Order Now" type="order" />}
        <Button type="secondary" label="Close" onClick={props.onClose} />
      </div>
    </Modal>
  );
};

export default Cart;
