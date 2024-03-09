import React, { useState } from "react";
import './FAQ_Accordion.css'

function FaqItem({question,answer}) {

const[show,setShow] =useState(false)

function toggle(){
  setShow(!show)
}

  return (
    <div className={`faq_item ${show ? "active" : ""} ` }>
      <div className="faq_header" onClick={toggle} >{question}</div>
      <div className="faq_body">
        <p>
         {answer}

        </p>
      </div>
    </div>
  );
}

const PassinData = ({data}) => {
  return (
    <div className="faq_accordion">
      <h1>FAQs </h1>
     {data.map((item)=>
     (<FaqItem
      key={item.id}
     question={item.question}
     answer={item.answer}


     />))}

    </div>
  );
};

const data=[
  {id:1, question:"What is your name",answer:"My name is S Rahul Krishna " },
  {id:2, question:"What is your strength",answer:"My strength is to think intuitively " },
  {id:3, question:"What is your weakness",answer:"Trying to be perfect every time" }
]

const FAQ_Accordion=()=>{
 return <PassinData data={data}/>
 //arrowfn if used with =>{} they require retrn fn otherwise use =()=>()
}

export default FAQ_Accordion;
