import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Digital_Clock = () => {

const[currTime,setCurTime]=useState(new Date());
// console.log(currTime)
const[Twenty4check,setTwenty4check] = useState(false)



useEffect(()=>{
  const timer = setInterval(()=>{
    setCurTime(new Date())
    //to make sure whenever the page is refreshed the time gets set.

  },1000)

return()=>clearInterval(timer)//when refreshed the whole thing gets mounted
//again and thus displaying the current time always and mounted once since we are using []in the useffect fn
//
},[]);


function forZero(num){
return num<10 ? `0${num}`: num;
}


function formatHr(hr){
  return hr === 0 ? 12
   :hr>12
   ? hr-12 :hr
}

function formatDate(date) {
  const optionDay={weekday:'long',year:'numeric',month:'long',day:'numeric'}
  const formattedDate = date.toLocaleDateString(undefined,optionDay);

  // console.log(formattedDate); // This logs the formatted date string
  return formattedDate; // This returns the formatted date string
}

function twenty4fn(currTime){
  setTwenty4check(true)
  const twenty4=currTime.getHours();

  console.log(twenty4)



  // console.log(currTime.getHours)
}

function twelveFn(currTime){
  setTwenty4check(false)
  const twelve=(currTime.getHours())

  console.log(twelve)
}

function AmPm(currTime){
  // console.log(currTime.getHours())
if (!Twenty4check)

return currTime>12 ? "PM" : "AM"


}





  return (
    <div className='digClock'>
        <h1>Digital Clock</h1>
        <input type='checkbox' id='twenty4' onChange={()=>twenty4fn(currTime)} checked={Twenty4check} ></input>24 hour
        <input type='checkbox' id='twelve'  onChange={()=>twelveFn(currTime)} checked={!Twenty4check} ></input>12 hour
        <div className='time'>
          {Twenty4check ? forZero(formatHr(currTime.getHours())+12) : forZero(formatHr(currTime.getHours()))}
          :
          {forZero(currTime.getMinutes())}
          :
          {forZero(currTime.getSeconds())} {AmPm(currTime)}
          </div>
        <div className='date'>{formatDate(currTime)}</div>





        <input type='radio' id='am'   checked={!Twenty4check && currTime.getHours() <12 ? true : false}></input>AM
        <input type='radio' id='pm'   checked={!Twenty4check && currTime.getHours()>12 ? true:false} ></input>PM

    </div>
  )
}

export default Digital_Clock