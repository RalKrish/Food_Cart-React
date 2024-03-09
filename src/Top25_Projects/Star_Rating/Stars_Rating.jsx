import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Stars.css"





const Stars_Rating = ({ noOfStars = 10 }) => {
  const [rating, setRating] = useState(0);
  //this particularly if for selected stars
  const [hover, sethover] = useState(0);
//this is for when we we just hover over them and just when we are not hovering we want them tobe unselected


  function handlClick(currIndex) {
    // console.log(currIndex);
    setRating(currIndex)
    //when clicked they need to stay selected
  }

  function MouseMove(currIndex) {
    // console.log("move",currIndex)
    sethover(currIndex)
    //when we enter a into a star but when we r just hovering over them we want them  to be selected but once we are not hovering we want them not to be selected.
    //So we cant use "setRating" again as it is already utilised by selected as it will change the state of "setRating"
  }

  function MouseLeave() {
    // console.log("leave",currIndex)
    sethover(rating)
    //when we leave a star that is considered to be not traversing over it and that does not change its state  so when we are not traversing then we dont want them to be selected.
    //Deslecting what was selected by "sethover(currIndex)"
  }

  return (
    <div className="star_rating">

      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive' }
            onClick={() => handlClick(index)}
             //if onclick then current one is selcted and retained in active state.
            onMouseMove={() => MouseMove(index)}
            //only mouse movement then it will just hover over it.
            onMouseLeave={() => MouseLeave()}
            size={35}
          />
        );
      })}
    </div>
  );
};

export default Stars_Rating;
