import React, { useReducer } from "react";

export const cartContext = React.createContext({
  items: [],
  amount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
const defaultState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotal =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedTotal };
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [items, dispatchItems] = useReducer(cartReducer, defaultState);

  const addItemHandler = (item) => {
    dispatchItems({ type: "ADD_ITEM", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchItems({ action: "REMOVE_ITEM", id: id });
  };
  const contextItems = {
    items: items.items,
    amount: items.totalAmount,
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
