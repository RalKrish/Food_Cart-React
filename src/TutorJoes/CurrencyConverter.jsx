import React, { useEffect, useState } from 'react'
import axios from "axios"


const CurrencyConverter = () => {

const[amt,setAmt]=useState(1)
const[fromCurr,setFrmCurr]=useState('USD')
const[toCurr,SetToCurr]=useState('INR')
const[convAmt,setConvAmt]=useState(null)
const[exchgRate,setExchgRate] = useState(null) //this we get from API table from the web


useEffect(()=>{
const getExcngRate = async () =>{

  try{
    let theUrl=`https://v6.exchangerate-api.com/v6/0089636b3d43300e98133ae1/latest/${fromCurr}`

    const res = await axios.get(theUrl);
    console.log(res)
    setExchgRate(res.data.conversion_rates[toCurr]); //the problem was for each api request res.data.conversion_rates this will vary so u always need to check the conole before giving the name
  }

  catch (error){
    console.log('Error occured sorry' , error)
  }

}
getExcngRate()

},[fromCurr, toCurr])

useEffect(()=>{
  if(exchgRate!== null){
    setConvAmt((amt*exchgRate).toFixed(2));
  }
}
,[amt,exchgRate])



function handleCurrChange(ev){
  const theVal= parseFloat(ev.target.value)
  setAmt(theVal)

}

function fromCurrChnage(ev){
  setFrmCurr(ev.target.value)
}

function toCurrChange(ev){
  SetToCurr(ev.target.value)
}

  return (
    <>
    <div className='currency_converter'>
    <div className='theData'>
      <h1>Currency Converter</h1>
      <div className='input_container'>


    <label htmlFor='amtBox'>Amount</label>
    <input type='textbox' id='amtBox' value={amt} onChange={handleCurrChange}></input>


        <label htmlFor='fromCurr'>From Currency:</label>
        <select id='fromCurr' value={fromCurr} onChange={fromCurrChnage}>
          <option value={"USD"}>USD - United State Dollar</option>
          <option value={"GBP"}>GBP - British Pound Sterling</option>
          <option value={"JPY"}>JPY - Japanese Yen</option>
          <option value={"AUD"}>AUD - Australian Dollar</option>
          <option value={"CAD"}>CAD - Canadian Dollar</option>
          <option value={"CHF"}>CHF - Swiss Franc</option>
          <option value={"CNY"}>CNY - Chinese Yuan</option>
          <option value={"INR"}>INR - Indian Rupee</option>
          <option value={"SGD"}>SGD - Singapore Dollar</option>
          <option value={"NZD"}>NZD - New Zealand Dollar</option>
          <option value={"HKD"}>HKD - Hong Kong Dollar</option>
          <option value={"SEK"}>SEK - Swedish Krona</option>
          <option value={"MXN"}>MXN - Mexican Peso</option>
          <option value={"BRL"}>BRL - Brazilian Real</option>
          <option value={"KRW"}>KRW - South Korean Won</option>
        </select>

        <label htmlFor='toCurr'>To Currency:</label>
        <select id='toCurr' value={toCurr} onChange={toCurrChange}>
          <option value={"USD"}>USD - United State Dollar</option>
          <option value={"GBP"}>GBP - British Pound Sterling</option>
          <option value={"JPY"}>JPY - Japanese Yen</option>
          <option value={"AUD"}>AUD - Australian Dollar</option>
          <option value={"CAD"}>CAD - Canadian Dollar</option>
          <option value={"CHF"}>CHF - Swiss Franc</option>
          <option value={"CNY"}>CNY - Chinese Yuan</option>
          <option value={"INR"}>INR - Indian Rupee</option>
          <option value={"SGD"}>SGD - Singapore Dollar</option>
          <option value={"NZD"}>NZD - New Zealand Dollar</option>
          <option value={"HKD"}>HKD - Hong Kong Dollar</option>
          <option value={"SEK"}>SEK - Swedish Krona</option>
          <option value={"MXN"}>MXN - Mexican Peso</option>
          <option value={"BRL"}>BRL - Brazilian Real</option>
          <option value={"KRW"}>KRW - South Korean Won</option>
        </select>

        <div className='result'>
          <p>{amt} {fromCurr} is equal to {convAmt} {toCurr}</p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default CurrencyConverter