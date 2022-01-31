import React, { useRef } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styles from "./MealForm.module.css";

const MealForm = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
    const amount = amountEntered.current.value;
    const amountNumber = +amount;
    props.onSubmit(amountNumber);
  };

  const amountEntered = useRef();
  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <Input
        label="Enter amount"
        ref={amountEntered}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button label="Add +" type="primary" />
      {/* {formIsValid && <p>Please enter a number between (1-5)</p>} */}
    </form>
  );
};

export default MealForm;
