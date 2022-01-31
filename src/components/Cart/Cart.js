import React from "react";
import Button from "../UI/Button";

const Cart = (props) => {
  const cartItems = [{ id: "m1", name: "salad", amount: 20, price: 14.99 }];
  return (
    <div>
      <ul>
        {cartItems.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <div>Amount entered</div>
      <div>
        <Button>Order</Button>
        <Button type="seconday">Close</Button>
      </div>
    </div>
  );
};

export default Cart;
