import React, { useEffect, useState } from 'react'
import './AdviceApp.css'

const AdviceApp = () => {
const [advice,setAdvice]=useState('Click button to get advice')
const [count,setCount] = useState(0)

async function getAdvice(){
  const resu =  await fetch("https://api.adviceslip.com/advice")
  const data1 = await resu.json()

  setAdvice(data1.slip.advice)
  // setCount(count+1 ) this is also correct
  setCount((ev)=> ev + 1)
  //for testing


}

useEffect(function (){
  getAdvice();
},[]);


  return (
    <div className='mainCont'>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice</button>
      <p>You have read  <b>{count}</b> advices</p>
    </div>
  )
}

export default AdviceApp