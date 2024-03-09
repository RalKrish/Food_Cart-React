import React, { useState } from "react";
import TheData from "./TheData";
import "./Accordion.css"

const Accordion = () => {
  const [select, setSelect] = useState(null);
  const [enableMulti , setMulti] = useState(false)
  const [multiSelect , setMutiID]= useState([])

function handleClick (SelId){
  setSelect(SelId === select ? null : SelId)
}
// console.log(select);


function handleMulti(Id) {
  // Create a copy of the multiSelect array using the spread operator
  let copyIndex = [...multiSelect];

  // Find the index of the current ID in the copyIndex array ie the accodrion question selected
  const currId = copyIndex.indexOf(Id);

  // Log the index to the console
  // console.log(currId);

  // If the current ID is not found in the copyIndex array ie (index is -1)
  //which means u have not clicked it yet
  if (currId === -1) {
    // Add the current ID to the copyIndex array
    copyIndex.push(Id);
  } else {
    // If the current ID is found in the copyIndex array
    // Remove the current ID from the copyIndex array using splice
    copyIndex.splice(currId, 1);
    //splice(index of the item to be removed,how many to remove)
  }

  // Update the multiSelect state with the modified copyIndex array
  //which does not have the removed element which u have removed previously
  setMutiID(copyIndex);

}
console.log("hellloyu",select,multiSelect)




  return (
    <div className="wrapper">
      <div className="accordion">
        <div className="btn_box">
        {enableMulti ?
        <button className="multiBtn" onClick={()=>setMulti(!enableMulti)} >Disable Multi Selection</button>
        :
        <button className="multiBtnTrue" onClick={()=>setMulti(!enableMulti)} >Enable Multi Selection</button>
      }

          </div>
        {
          TheData && TheData.length>0 ?
          TheData.map((selct)=>
          <div className="accordItem">
            <div onClick={
              enableMulti ?
              ()=>handleMulti(selct.id)
              :
              ()=>handleClick(selct.id)}

              className="AccordTitle">
              <h3 className="AccQuest" >{selct.question} <span>+</span></h3>

              {
                enableMulti ?
                multiSelect.indexOf(selct.id) !==-1 &&
                //if the current index is not clicked yet
                <div className="AccAns">{selct.answer}</div>
                :
                select === selct.id &&
                <div className="AccAns">{selct.answer}</div>

              }

              {/* {
                select===selct.id ?
                <div className="AccAns">{selct.answer}</div>
                :
                null
              } */}
            </div>

          </div>)


          : <div>No data found</div>
        }
      </div>
    </div>
  );
};

export default Accordion;
