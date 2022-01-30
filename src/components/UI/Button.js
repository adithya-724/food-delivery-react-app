import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  let classes = `${styles.btn}`;
  if (props.type === "primary") {
    classes = `${styles.primary} ${styles.btn}`;
  } else if (props.type === "secondary") {
    classes = `${styles.secondary} ${styles.btn}`;
  }
  return (
    <button onClick={props.onClick} className={classes}>
      {props.label}
    </button>
  );
};

export default Button;
