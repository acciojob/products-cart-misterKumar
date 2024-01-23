import React from "react";
import CartItem from "./CartItem";

const Cart = ({ items, onRemove }) => {
  return (
    <div className="cart">
      {items.length === 0 ? (
        <p class="error">There are no items in the cart</p>
      ) : (
        items.map((item, index) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => onRemove(index)}
          />
        ))
      )}
    </div>
  );
};

export default Cart;