import React from "react";
import "./Card.css";
import pizzaImage from "./pizza3.jpg";

const userData = [
  {
    name: "Rahul",
    City: "Chennai",
    Description: "Front End Developer",
    Skills: [
      "UI/UX",
      "Corel Draw",
      "Photoshop",
      "NODE JS",
      "HTML",
      "CSS",
      "Javascript",
      "React JS",
      "Express JS",
      "Mongo DB",
    ],
    online: true,
    profile: pizzaImage,
  },

  {
    name: "Kumar",
    City: "Bengaluru",
    Description: "Front End Developer",
    Skills: [
      "UI/UX",
      "Corel Draw",
      "Photoshop",
      "NODE JS",
      "HTML",
      "CSS",
      "Mongo DB",
    ],
    online: true,
    profile: pizzaImage,
  },

  {
    name: "Kamal",
    City: "Paschim-Banga",
    Description: "Front End Developer",
    Skills: [
      "Photoshop",
      "NODE JS",
      "HTML",
      "CSS",
      "Javascript",
      "React JS",
      "Express JS",
      "Mongo DB",
    ],
    online: false,
    profile: pizzaImage,
  },

  {
    name: "Rohit",
    City: "Andra-Pradesh",
    Description: "Front End Developer",
    Skills: [
      "Vlogging",
      "Corel Draw",
      "Photoshop",
      "React JS",
      "Express JS",
      "Mongo DB",
    ],
    online: false,
    profile: pizzaImage,
  },
];

function CardUser(props) {
  return (
    <div >
      <div className="card_container">
        <span className={props.online ? "online" : "offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}

        </span>
        <img src={props.profile}></img>
        <h3 className="user">{props.name}</h3>
        <h3 className="chennai">{props.city}</h3>
        <p>{props.descr}</p>
        <div>
          <button className="theBtn msg">Message</button>
          <button
           className="theBtn follow">Following</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}

            {/* <li>UI/UX</li>
      <li>Corel Draw</li>
      <li>Photoshop</li>
      <li>NODE JS</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>React JS</li>
      <li>Express JS</li>
      <li>Mongo DB</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

const Card = () => {
  return (//always style this part when you want to target each card
    <>
    <div className="Themain">
    {userData.map((user, index) => (
        <CardUser
          key={index}
          name={user.name}
          city={user.City}
          descr={user.Description}
          online={user.online}
          profile={user.profile}
          skills={user.Skills}

        ></CardUser>
      ))}


    </div>

    </>
  );
};

export default Card;
