import React, { useEffect, useState } from "react";
import "./LoadMore.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProd] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn ,setDisableBtn] = useState(false)

  async function fetchProd() {
    try {
      setLoading(true);
      const response1 = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const res1 = await response1.json();
      console.log(res1);

      if (res1 && res1.products && res1.products.length) {
        // setProd(res1.products);
        setProd((prevData)=>[...prevData,...res1.products]);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProd();
  }, [count]);

  if (loading) {
    <p>Loading data! Please wait </p>;
  }

  useEffect(()=>{
if(products && products.length === 40)
  setDisableBtn(true)

  },[products])

  return (
    <div className="mainContainer" >
      <div className="prodBox">
        {products && products.length
          ? products.map((eachProduct) => (
              <div className="product" key={eachProduct.id}>
                <img
                  className="images1"
                  src={eachProduct.thumbnail}
                  alt="Product Thumbnail"
                />
                <p className="title1">{eachProduct.title}</p>
              </div>
            ))
          : null}
      </div>

<div className="button">
        <button disabled={disableBtn} onClick={()=>setCount(count+1)} className="button2">Load More Button</button>

     {
      disableBtn ? <p>You have reached the limit </p> : null
     }


      </div>

</div>


  );
};

export default LoadMore;
