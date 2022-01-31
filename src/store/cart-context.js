import React from "react";

export const cartContext = React.createContext({
  items: [],
  amount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const CartProvider = (props) => {
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};
  const contextItems = {
    items: [],
    amount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <cartContext.Provider value={contextItems}>
      {props.children}
    </cartContext.Provider>
  );
};
export default CartProvider;
