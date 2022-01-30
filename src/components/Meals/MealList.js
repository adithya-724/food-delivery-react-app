import React from "react";
import styles from "./MealList.module.css";
import MealForm from "./MealForm";

const MealList = (props) => {
  return (
    <div className={styles.item}>
      <span className={styles.label}>{props.name}</span>
      <div className={styles.image}>
        <img src={props.url} alt="" />
      </div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.form}>
        <MealForm id={props.id} />
      </div>
    </div>
  );
};

export default MealList;
