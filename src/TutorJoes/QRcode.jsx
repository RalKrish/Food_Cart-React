import React, { useState } from 'react';
// import pizzaImg from './pizza3.jpg';
import './QRcode.css'

const QRcode = () => {

const [theImg,setimg] = useState()
const [loading,setLoading] = useState(false)
const [QRdata,setQRdata] = useState('Rahul Krishna')
const [size,setSize] = useState('')


function generate(){
  // setimg(pizzaImg)
  setLoading(true);
  try{
    const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(QRdata)}`
    setimg(url)
  }
  catch(error){
    console.log("Error generating QR code",error)
  }
  finally{
    setLoading(false)
  }

}

function download(){
  fetch(theImg)
  .then((resp)=>resp.blob())
  // .then((blob)=>(console.log(blob)))

  .then((blob)=>{
    const downldLink=document.createElement('a');
    // console.log(downldLink)
    // console.log(blob)
    downldLink.href = URL.createObjectURL(blob);
    // console.log( downldLink.href)
    downldLink.download = "qrcode.png";
    document.body.appendChild(downldLink);
    downldLink.click();
    document.body.removeChild(downldLink);

  });

}
// function download() {do not try this method as this doeas not download anything
//   const downldLink = document.createElement('a');
//   downldLink.href = theImg; // Use the direct image URL
//   downldLink.download = "qrcode.png";
//   document.body.appendChild(downldLink);
//   downldLink.click();
//   document.body.removeChild(downldLink);
// }



  return (
    <div className='mainCont'>
      <h1>QR CODE GENERATOR</h1>
      {loading &&<p>Please wait...</p>}
      {theImg &&  <img className='imgBox'src={theImg}></img> }

      <label htmlFor='dataInput'>Data for QR code</label>
      <input type='text' id='dataInput'value={QRdata} placeholder='Enter Data For QR code' onChange={(e)=>setQRdata(e.target.value)}></input>
    <label htmlFor='sizeInput' >Required size</label>
    <input type='text' id='sizeInput' placeholder='Enter Size' value={size} onChange={(ev)=>setSize(ev.target.value)}></input>
    <button className="download" onClick={download}>Download QR Code</button>
    <button className="generate" onClick={generate} disabled={loading} >Generate QR Code</button>
    </div>
  )
}

export default QRcode