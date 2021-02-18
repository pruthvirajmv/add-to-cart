import "./styles.css";
import React, { useState } from "react";

function AddToCart() {
  const [add, setAdd] = useState({ Tshirt: 0, Trousers: 0, Shoes: 0 });

  var cartList = [
    { name: "Tshirt"},
    { name: "Trousers"},
    { name: "Shoes"}
  ];

  return (
    <>
    <div>
      <ul>
        {cartList.map((item) => (
          <li key={item.name}> {item.name}
          <button onClick ={() =>
        setAdd({ ...add, [item.name]: add.[item.name]+1 })  
        }>add</button> </li>
        ))}
      </ul>

        <ul className="cart">
        {cartList.map((item) => (
          <li key={item.name}>
            {" "}
            {item.name} <div>Qty in Cart - {add.[item.name]}</div>{" "}
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
