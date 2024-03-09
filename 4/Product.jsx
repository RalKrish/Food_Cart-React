import React from "react";
import "./product.css";

const Product = ({ product,cart,setCart }) => {


const addCart = ()=>{
  setCart([...cart,product])
};
const removeCart = ()=>{
  setCart(cart.filter((selected)=>selected.id !== product.id))
}

  return (
    <div className="product">
      <div className="TheImg">
        <img src={product.image} />
      </div>
      <div className="Product_info">
      <h3>{product.name}</h3>
      <p>Price Rs:{product.amt}</p>
      </div>
      {cart.includes(product)?

       (<button className="remove" onClick={removeCart}>Remove from Cart</button>)
       :
      ( <button className="add" onClick={addCart}>Add to Cart</button>)
    }

    </div>
  );
};

export default Product;
