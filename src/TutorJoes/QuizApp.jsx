import React, { useEffect, useState } from "react";
import "./QuizApp.css";
import questionData from "./Quiz_App.json";

const QuizApp = () => {
  const [currQuestion, setCurrQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(10);

useEffect(()=>{
  let interval;
  if (timer>0 && !showScore){
    interval = setInterval(()=>{
  setTimer((prevTimer)=>prevTimer-1)//timer needs to descend from 10sec

    },1000)
  }
  else if(timer===0 && currQuestion<questionData.length-1 ){
    setCurrQuestion(currQuestion+1)
    setTimer(10)
  }
  else{
    clearInterval(interval)//clear the time for interval to start again
     setShowScore(true) //the score is closed and the question appear from the start
  }
return () => clearInterval(interval);
//clean up fn is trigeered when we click an option so, for the next question the timer descends from 10 again.
},[timer,showScore])
//useffect is executed when timer runs and showscore is triggered.



const handleAns=(optionSelc)=>{
if(optionSelc===questionData[currQuestion].correctAnswer){
  setScore((prevScore)=>prevScore+1)
}

if(currQuestion < questionData.length - 1)
{
  setCurrQuestion((PrevQuest)=>PrevQuest+1);
  setTimer(10)
}
else{
  setShowScore(true)
}
}

function handleRestart(){
  setCurrQuestion(0)
  setScore(0)
  setShowScore(false)
  setTimer(10)
}
function fn_Nxt() {
  if (currQuestion < questionData.length - 1){
    //(0,1..8 < 9) currQuestion to be taken upto 9 ie total 10-1. you want this condition to be executed until 10th question ie 9 in array so we use questionData.length - 1
    //i dont want his condition to be executed once i reach 10th question that is 9th in array as after that i want the score to be displayed.
    setCurrQuestion((PrevQuest) => PrevQuest + 1);
    setTimer(10);
  } else {
    setShowScore(true);
  }
}

  return (
    <div>
      <div className="quizApp">
        {showScore ? (
          <div className="scoreSection">
            <h2>Your Score : {score}/{questionData.length }</h2>
            {/*  which means Your Score : answered / total questions here total questions is 10 so questionData.length - 1 in this -1 is removed  */}
            <button className="restart" onClick={handleRestart}>Restart</button>
          </div>
        ) : (
          <div className="questionSection">
            <h2>Question {currQuestion+1}</h2>
            {/* intitially the value is 0 so to print 1 we need too give 0+1 */}


            <p>{questionData[currQuestion].question}</p>
            {/* here currQuestion intilally refers to 0th index as we have sethe intial value to be 0 so from first array that is 0th index question is taken */}
            <div>
            {questionData[currQuestion].options.map((optionVal,index)=>(
              <button className="option1" key={index} onClick={()=>handleAns(optionVal)}>{optionVal}</button>
            ))}



              {/* <button className="option1">Option1</button>
              <button className="option1">Option2</button>
              <button className="option1">Option3</button>
              <button className="option1">Option4</button> */}
            </div>
            <div className="timer">
              Time : <span>{timer}s</span>
              <span>
                <button className="next" onClick={fn_Nxt}>Next</button>

                </span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
