
import React, { useState } from "react";
import './../styles/App.css';
const allProducts = ["Samsung Galaxy Fold 4", "Iphone 14 pro", "Pixel 5","MI notet 6","FireStick","OnePlus Nord"]

const App = () => {
  const [cart, setCart] = useState([])
  function handleAddToCart(item) {
    setCart([...cart, item])
  }
  function handleDelete(i) {
    setCart(cart.filter((item, ind) => ind != i))
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <div className="container">
        <h3>List of Products</h3>
        {
          allProducts.map(item => (
            <div className="item">
              <p>{item}</p>
              <button onClick={() => handleAddToCart(item)} >Add Item</button>
            </div>
          ))
        }
      </div>
      <div className="cart">
        <h3>Cart</h3>
        {
          cart.length === 0 ? (
            <p>There are no items in the cart</p>
          )
            :
            (
              cart.map((item, i) => (
                <div>
                  <p>{item}</p>
                  <button onClick={() => handleDelete(i)} >Remove</button>
                </div>
              ))
            )
        }
      </div>
    </div>
  )
}

export default App