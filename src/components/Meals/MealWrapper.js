import React from "react";
import MealSummary from "./MealSummary";
import MealItems from "./MealItems";

const MealWrapper = () => {
  return (
    <div>
      <MealSummary />
      <MealItems />
    </div>
  );
};

export default MealWrapper;
