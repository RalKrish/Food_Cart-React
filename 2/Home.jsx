import React, { useState } from 'react'
// import FruitsImage from '../fruits.jpg';
import Json_data from "../all_Img.json";
import Product from '../4/Product';
import "./Home.css"




const Home = ({cart,setCart}) => {
  const [products] = useState(Json_data)
  // console.log(Json_data)

  return (
    <div className='product_container'>
      {products.map((eachProduct)=>(
        <Product
        key={eachProduct.id}
        product={eachProduct}
         cart={cart}
         setCart={setCart}
         />
      ))}

      {/* <img src={FruitsImage}></img> */}
    </div>
  )
}

export default Home