import React, { useState } from "react";
import "./Calendar.css";


const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];



const Calendar = () => {

const [selcDate , setDate] = useState(new Date())
// console.log(selcDate)

const DaysInMonth=()=>{

  const daysArray = [];

  const FirstDay = new Date(selcDate.getFullYear() , selcDate.getMonth(),1)
  //Particular year, Part month, Part Day
  // console.log(FirstDay)
  const LastDay = new Date(selcDate.getFullYear() , selcDate.getMonth()+1,0)
  // current month+1month  0 represent the prev day of the 1st day of
  //the next month ie last day of current month
  // console.log(LastDay)

  for(let i=0 ; i<FirstDay.getDay() ; i++ ){
    daysArray.push(null)
    //fn for emptying the cells before the first day
  }
  for(let i=1 ; i<=LastDay.getDate() ; i++){
    daysArray.push(new Date(selcDate.getFullYear(),selcDate.getMonth(),i))
  }
  return daysArray;

}
const changeMonth=(e)=>{
 const newMonth = parseInt(e.target.value,10)
 setDate(new Date(selcDate.getFullYear(),newMonth,1))
}
const changeYear=(e)=>{
  const newYear = parseInt(e.target.value,10)
  setDate(new Date(newYear ,selcDate.getMonth(),1))
}

const currentDay=(date1,date2)=>{
  return date1.getDate()===date2.getDate() &&
  date1.getMonth()===date2.getMonth() &&
  date1.getFullYear()===date2.getFullYear()
}

function toTodayDate(){
  const today = new Date(); // Get today's date
  setDate(today); // Set the calendar date to today's date
}

  return (
    <div className="calendar">
      <div className="header">
        <button className="leftArr"
        onClick={()=>{
          setDate(new Date (selcDate.getFullYear(),selcDate.getMonth()-1,1) )
        }}
         >{"<"}</button>

        <select className="monthSel" value={selcDate.getMonth()} on onChange={changeMonth}>
          {months.map((month,index) =>(
            <option key={index} value={index}>{month}</option>
          ) )}
          {/* here index refers to the index no. in array for 0 Jan 1 Feb
          month refers to the name of the corrsponding month */}
        </select>


        <select className="theYear" value={selcDate.getFullYear()} onChange={changeYear} >
        {Array.from({length:15},(_,i)=>
      selcDate.getFullYear()-5+i).map((year)=>(
        <option key={year} value={year}>

              {""}{year}
          </option>
          ))
          }
          </select>

          <button className="todayDate" onClick={toTodayDate}>Today's Date</button>


        <button className="rightArr"
         onClick={()=>{
          setDate(new Date (selcDate.getFullYear(),selcDate.getMonth()+1,1) )
        }}

        >{">"}</button>
      </div>

    <div className="daysOfWeek">
      {daysOfWeek.map((eachDay) =>(
        <div key={eachDay}>{eachDay}</div>
      ) )}
    </div>

<div className="days">
{DaysInMonth().map((days,index)=>(
  <div key={index} className={days? (currentDay(days,new Date()) ? "visibleDays current":"visibleDays")  :"emptyDays"}>
    {days?days.getDate():""}</div>
))}
</div>
    </div>
  );
};

export default Calendar;
