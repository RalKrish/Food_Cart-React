import React, { useEffect, useState } from 'react'

const Color = () => {

const [colorType,setColorType] = useState("hex")
const [Thecolor,setColor] = useState("#000000")

useEffect(() => {
  if (colorType === "hex") {

      setColor("#0025")
  } else {

    setColor("rgb(92,55,67)")
  }
}, [colorType]);



function HexColor(){


const hex =[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let hexColor =  '#'

for(let i=0; i<6 ; i++){

   const randomIndex = Math.floor(Math.random() * hex.length);
   // roundoff any no. (0 to 0.9) say  0.7 * 6  ie 4.2 ie 4 now 4th index is selected here length of 'hex' is 15 so upto 14 will be generated
   hexColor = hexColor + hex[randomIndex];
   //hexColor = #+5 , hexColor = #+5+0 ie hexColor=#50..
  //  console.log("the",i)
  console.log("ret",hexColor)

}
 console.log(hexColor)
 setColor(hexColor)
}

function RGBColor(){
  const r = Math.floor(Math.random()*256)
  const g = Math.floor(Math.random()*256)
  const b = Math.floor(Math.random()*256)
console.log(`rgb(${r},${g},${b})`)
setColor(`rgb(${r},${g},${b})`);

}
  return (
    <div style={
      {
        width:"100vw",
        height:"100vh",
        background:Thecolor,
      }
    }>

      <button onClick={()=>setColorType('hex')} >Create HEX button</button>
      <button onClick={()=>setColorType('rgb')} >Create RGB button</button>
      <button onClick={colorType === 'hex' ? HexColor : RGBColor } >Generate Random Color</button>

<div style={
  {
    background:"#C5B7B9",
    color:'black'
  }
}>
<h1>{colorType === 'hex' ? `HEX: ${Thecolor}` : `RGB : ${Thecolor}`}</h1>

  <label htmlFor='textColor'>Change Color</label>
<input onChange={(e) => setColor(`#${e.target.value}`)} type='textbox' id='textColor'>

</input>
</div>

    </div>
  )
}

export default Color