import React, { useState } from "react";
import './../styles/App.css';
import Cart from "./Cart";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h2>List of Products</h2>
      <div class="container">
        <div class="item">
          <div>Samsung Galaxy Fold 4</div>
          <button
            onClick={() =>
              addItem({ id: Date.now(), name: "Samsung Galaxy Fold 4" })
            }
          >
            Add Item
          </button>
        </div>
        <div class="item">
          <div>Iphone 14 Pro</div>
          <button
            onClick={() => addItem({ id: Date.now(), name: "Iphone 14 Pro" })}
          >
            Add Item
          </button>
        </div>
        <div class="item">
          <div>Pixel 5</div>
          <button onClick={() => addItem({ id: Date.now(), name: "Pixel 5" })}>
            Add Item
          </button>
        </div>
        <div class="item">
          <div>Mi note 6</div>
          <button
            onClick={() => addItem({ id: Date.now(), name: "Mi note 6" })}
          >
            Add Item
          </button>
        </div>
        <div class="item">
          <div>FireStick</div>
          <button
            onClick={() => addItem({ id: Date.now(), name: "FireStick" })}
          >
            Add Item
          </button>
        </div>
        <div class="item">
          <div>OnePlus Nord</div>
          <button
            onClick={() => addItem({ id: Date.now(), name: "OnePlus Nord" })}
          >
            Add Item
          </button>
        </div>
      </div>
      <hr />
      <h2>Cart</h2>
      <Cart items={items} onRemove={removeItem} />
    </div>
  );
};

export default App;