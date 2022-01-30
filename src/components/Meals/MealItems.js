import React, { useMemo } from "react";
import MEAL_ITEMS from "./data/MEAL_DATA";
import styles from "./MealItems.module.css";
import MealList from "./MealList";

const MealItems = () => {
  const mealItems = useMemo(() => {
    return MEAL_ITEMS;
  }, []);

  return (
    <section className={styles.items}>
      {mealItems.map((item) => {
        return (
          <MealList
            key={item.id}
            id={item.id}
            name={item.name}
            url={item.url}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </section>
  );
};

export default MealItems;
