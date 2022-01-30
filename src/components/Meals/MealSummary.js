import React from "react";
import styles from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <section className={styles.section}>
      <h1>Explore across multiple restaurants</h1>
      <p>
        Choose your favourite dish from the available multitudes of restaurants
        all over the city !
      </p>
    </section>
  );
};

export default MealSummary;
