import React, { useContext } from "react";
import styles from "./MealList.module.css";
import MealForm from "./MealForm";
import { cartContext } from "../../store/cart-context";

const MealList = (props) => {
  const itemCtx = useContext(cartContext);
  const amountHandler = (amount) => {
    itemCtx.addItem({
      name: props.name,
      price: props.price,
      amount: amount,
      id: props.id,
    });
  };
  return (
    <div className={styles.item}>
      <span className={styles.label}>{props.name}</span>
      <div className={styles.image}>
        <img src={props.url} alt="" />
      </div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>{`$${props.price}`}</div>
      <div className={styles.form}>
        <MealForm id={props.id} onSubmit={amountHandler} />
      </div>
    </div>
  );
};

export default MealList;
