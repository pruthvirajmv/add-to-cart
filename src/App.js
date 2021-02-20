import "./styles.css";
import React, { useState } from "react";

function AddToCart() {
  const [cartList, setCartList] = useState([]);

  const productList = [
    { name: "Tshirt", count: 1 },
    { name: "Trousers", count: 1 },
    { name: "Shoes", count: 1 }
  ];

  function cartUpdate(select) {
    if (cartList.some((item) => item.name === select.name)) {
      let update = cartList.reduce((cart, item) => {
        if (item.name === select.name) {
          if (item.count > 0) cart.push({ ...item, count: item.count + 1 });
        } else {
          cart.push(item);
        }
        return cart;
      }, []);
      setCartList(update);
    } else {
      cartList.push(select);
      setCartList([...cartList]);
    }
  }

  function removeItem(select) {
    if (cartList.some((item) => item.name === select.name)) {
      let update = cartList.reduce((cart, item) => {
        // console.log(cart);
        // console.log(item);
        if (item.name === select.name) {
          if (item.count > 1) cart.push({ ...item, count: item.count - 1 });
        } else {
          console.log(item);
          cart.push(item);
        }
        //console.log(cart);
        return cart;
      }, []);
      console.log(update);
      setCartList(update);
    }
  }
  //console.log(cartList);

  return (
    <>
      <div>
        <h1> Proucts </h1>
        <ul>
          {productList.map((item) => (
            <li key={item.name}>
              {" "}
              {item.name}
              <button onClick={() => cartUpdate(item)}>Add</button>
            </li>
          ))}
        </ul>

        <h1> Your Cart </h1>

        <ul className="cart">
          {cartList.map((item) => (
            <li key={item.name}>
              {" "}
              {item.name}{" "}
              <div>
                Qty in Cart -{" "}
                <button onClick={() => removeItem(item)}>-</button> {item.count}{" "}
                <button onClick={() => cartUpdate(item)}>+</button>
              </div>{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <AddToCart />
    </div>
  );
}
