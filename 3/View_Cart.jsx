import React, { useEffect, useState } from "react";
import "./viewCart.css";
const View_Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curVal)=>acc+parseInt(curVal.amt),0))
  },[cart])
  // console.log(cart)
  return (
    <div className="mainBox">
      <h1>Cart Products</h1>

      {cart.map((eachProduct) => (

        <div className="cart_Product" key={eachProduct.id}>

          <div className="imgBox">
            <img src={eachProduct.image}/>
          </div>
          <div className="details">
            <h3>{eachProduct.name}</h3>
            <p>Price Rs: {eachProduct.amt}  </p>
          </div>
        </div>
      ))}

      <h2>Total Amount Rs: {total}</h2>
    </div>
  );
};

export default View_Cart;
