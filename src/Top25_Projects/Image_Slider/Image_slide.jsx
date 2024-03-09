import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Image_slide = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);//1 create usestate for managing images.
  const [currentSlide, setSlide] = useState(0);//2 create usstae for managing slides.
  const [errorMsg, setError] = useState(null);//3 create usestate for error handling.
  const [loading, setLoading] = useState(false);//4 create usestate for loading that needs to be dispalyed during page refreshing. (//5 from line 30)

  async function fetchImages(getURL) { //10 creating ascync fn since we are getting data from api.getting url when everything gets loaded due to useeffect line 32

    try { //11 here we use try & catch so as to get the error

      setLoading(true); //12 here if loading state is set to true then furhter execution is done.

      const response = await fetch(`${getURL}?page=${page}&limit=${limit}`);//13 each one is obtained wrt the syntax separetely as 'https://picsum.photos/v2/list?page=2&limit=10' as obtained from app.js

      const data1 = await response.json();//13 after that the data obtained ie data1 is converted to JSON format.

      if (data1) { //14 if the formatting is done and prorperly then furhter processing is done .
        setImages(data1);//15 setimage emepty array is being stored with images obtained
        setLoading(false); //16 an loading is kept false as the images is obtained
      }
    } catch (e) {//17 Now incase of errors, error handling is done & the error is caught here.
      console.log(e.message); //18 The error if exists is then logged
    }
  }

  useEffect(() => { //5 using useEffect,checking so as to get the url which is obtained from api and then we check it further
    if (url !== "") { //6 if URL exists ie != to empty then send it for further processing
      fetchImages(url);//6.1 from here calling the fn
    }
  }, [url]);//7 UseEffect gets triggered each and everytime url is obtained

  // console.log(images);

  if (loading) {//8 if no data is fetched ie false state then following Msg is loaded so loading set true
    return <p>Please wait Data is loading</p>;
  }

  if (errorMsg !== null) { // 9 if the msg loading is complete ie !== null then there is some issue then give the error
    return <p>Error occured {errorMsg}</p>;
  }

  function nextSlide() {
 //currentSlide ==images.length-1,, to check for lastslide
    //currentSlide == 0,, to check for Ist slide
    setSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);


    //here for next currentSlide === last ? go to first : go to nextslide

  }

  function prevSlide() {
    setSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    //here for next currentSlide === first  ? go to last : go to prevslide
  }

  return (
    <div className="mainContainer"> {/* {//18 then main div is created  } */}

      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow ArLeft" />  {/*19 after that buttons are created */}

      {/* 20 after that the images are checked and mapped so after that classname is given */}

      {images && images.length
        ? images.map((imgItem, indx) => (//21 if images exist and total images exist  ie( images.length) is true then
            <img
              key={imgItem.id}
              src={imgItem.download_url}
              className={
                currentSlide === indx ? "current_Img" : " current_Img hiddenImg"
                //22 if currentImg is selected then the particular img is only selcted then the other images exhibit the same property and with another class disply is none.

                //Plz note the two classes are given so that the other imgs retain the same size and orientaion and only have an extra prorperty as none.
              }
            />
          ))
        : null}

      <BsArrowRightCircleFill
        className="arrow ArRight"
        onClick={nextSlide}
      ></BsArrowRightCircleFill>

      {/* for image  indiactor circle */}

      <span className="circle_Indicator">
        {images && images.length
          ? images.map((imgItem, indx) => (
              <button
                key={imgItem.id}
                src={imgItem.download_url}
                className={
                  currentSlide === indx ? "current_Indicator" : "OtherIndicator"
                  //23 to make sure that the indiactor the current index alone is in particular color and the others are in diff color.
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default Image_slide;
