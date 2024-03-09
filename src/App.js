
import './App.css';
import Header from './Food_Cart/1/Header';
import {BrowserRouter ,Route,Routes} from "react-router-dom";
import View_Cart from './Food_Cart/3/View_Cart';
import Home from './Food_Cart/2/Home';
import { useState } from 'react';
import Accordion from './Top25_Projects/Accordion/Accordion';
import Color from './Top25_Projects/Random_Color_Geneartor/Color';
import Stars_Rating from './Top25_Projects/Star_Rating/Stars_Rating';
import Image_slide from './Top25_Projects/Image_Slider/Image_slide';
import LoadMore from './Top25_Projects/Accordion/Load_More_Button/LoadMore';




// import QuizApp from './TutorJoes/QuizApp';
// import Calendar from './TutorJoes/Calendar';
// import Digital_Clock from './TutorJoes/Digital_Clock';
// import FAQ_Accordion from './TutorJoes/FAQ_Accordion';
// import CurrencyConverter from './TutorJoes/CurrencyConverter';

// import AdviceApp from './TutorJoes/AdviceApp';
// import BMICalculator from './TutorJoes/BMICalculator';
// import NewForm from './TutorJoes/NewForm';
// import QRcode from './TutorJoes/QRcode';
// import StudentsList from './TutorJoes/StudentsList';
// import List2 from './TutorJoes/List2';
// import ArraySample from './TutorJoes/ArraySample';
// import PropsLearn from './TutorJoes/props_Learn';
// import Card from './TutorJoes/Card';

function App() {
const [cart,setCart] = useState([])
  return(
   <div>
{/* <Image_slide url={"https://picsum.photos/v2/list"}  page={'1'} limit={'10'}></Image_slide> */}

<LoadMore></LoadMore>


{/* <Stars_Rating></Stars_Rating>
<Color></Color>
    <Accordion></Accordion> */}

    {/* <BrowserRouter>
    <Header></Header>
    <div className='container'>
    <Routes>
      <Route path="/" element={<Home cart={cart} setCart={setCart}/>} ></Route>
      <Route path="/Cart" element={<View_Cart cart={cart} setCart={setCart} />} ></Route>

    </Routes>
    </div>

    </BrowserRouter> */}

    {/* <QuizApp></QuizApp> */}
   {/* <Calendar></Calendar> */}
    {/* <FAQ_Accordion></FAQ_Accordion> */}
    {/* <Digital_Clock></Digital_Clock> */}
{/* <CurrencyConverter></CurrencyConverter> */}
    {/* <BMICalculator></BMICalculator> */}
    {/* <AdviceApp></AdviceApp> */}
    {/* <QRcode></QRcode> */}
    {/* <NewForm></NewForm> */}

    {/* <Card></Card> */}

   </div>
  )



}

export default App;




//   // const items1=[
//   //   {id:1 , name:"Rahul"},
//   //   {id:2 , name:"Leo"},
//   //   {id:3 , name:"Rio"}


//   // ]

//   return(
//     <div>



//  {/* <props_Learn></props_Learn> */}
//  {/* <StudentsList name='Rahul Krishna' age={25} MaritalStatus='No'></StudentsList>
//  <StudentsList name='Gokul Krishna' age={26} MaritalStatus='No'></StudentsList>
//  <StudentsList name='Hari Krishna' age={32} MaritalStatus='No'></StudentsList>
//  <StudentsList name='Sri Krishna' age={22} MaritalStatus='No'></StudentsList> */}
// {/* <StudentsList></StudentsList> */}

// <List2>
//   <div>
//   <p>line 1 take position</p>
//   <p>line 2 take charge</p>
// </div>

// </List2>
// <ArraySample items={items1}></ArraySample>

//  </div>