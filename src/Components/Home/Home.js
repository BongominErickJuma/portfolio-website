import React from "react";
import Me from "../Assets/Bongomin.jpg";
import "./Home.css";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <h2 className="section__title section__title--intro">
        Hi, I am <strong>Bongomin Erick Juma</strong>
      </h2>
      <div className="section__subtitle section__subtitle--intro">
        <p>
          front-end Web developer with <strong>React.js</strong>
        </p>
        <p>Currently learning full-stack web develpment.</p>
        <button className="btn">
          <a href="">View Course</a>
        </button>
      </div>
      <div className="info">
        <div className="contacts">
          <Contact />
        </div>
        <img src={Me} alt="A pht of Bongomin Smiling" className="my-pic" />
      </div>
      <div className="skills">
        <h2 className="section__title coral">Skills</h2>
        <div className="skills-div">
          <div className="experienced">
            <h3>Good</h3>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React.Js</li>
            </ul>
          </div>
          <div className="intermediate">
            <h3>Intermediate</h3>
            <ul>
              <li>Python</li>
              <li>Django</li>
              <li>C</li>
              <li>MYSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
