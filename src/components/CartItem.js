import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <p>{item.name}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default CartItem;