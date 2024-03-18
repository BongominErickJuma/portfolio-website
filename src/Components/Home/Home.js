import React from "react";
import { Link, NavLink } from "react-router-dom";
import Me from "../Assets/portfolio.png";
import "./Home.css";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <h2 className="section__title section__title--intro">
        Hi, I am <strong className="h3">Bongomin Erick Juma</strong>
      </h2>
      <div className="section__subtitle section__subtitle--intro">
        <p>full-stack Web developer</p>
        <button type="button" className="btn btn-outline-danger btn-lg px-4">
          <NavLink to="/projects" className="nav-link">
            View Projects
          </NavLink>
        </button>
      </div>
      <div className="info">
        <div className="contacts">
          <Contact />
        </div>
        <img src={Me} alt="A pht of Bongomin Smiling" className="my-pic" />
      </div>
      <h2 className="section__title coral mt-5">Skills</h2>
      <div className="container">
        <div className="list-group">
          <h3 className="h3 my-5">Good</h3>
          <label className="list-group-item d-flex gap-2">
            <small className="d-block text-body-secondary">HTML & CSS</small>
          </label>
          <label className="list-group-item d-flex gap-2">
            <small className="d-block text-body-secondary">JavaSript</small>
          </label>
          <label className="list-group-item d-flex gap-2">
            <small className="d-block text-body-secondary">React JS</small>
          </label>
          <label className="list-group-item d-flex gap-2">
            <small className="d-block text-body-secondary">Node JS</small>
          </label>
          <label className="list-group-item d-flex gap-2">
            <small className="d-block text-body-secondary">Bootstrap JS</small>
          </label>
          <label className="list-group-item d-flex gap-2">
            <small className="d-block text-body-secondary">PostgreSQL</small>
          </label>
          <label className="list-group-item d-flex gap-2">
            <small className="d-block text-body-secondary">MySQL</small>
          </label>
        </div>

        <div className="list-group">
          <h3 className="h3 my-5">Intermediate</h3>
          <label className="list-group-item d-flex gap-2">
            <small className="d-block text-body-secondary">JQuery</small>
          </label>
          <label className="list-group-item d-flex gap-2">
            <small className="d-block text-body-secondary">Django</small>
          </label>
          <label className="list-group-item d-flex gap-2">
            <small className="d-block text-body-secondary">Python</small>
          </label>
          <label className="list-group-item d-flex gap-2">
            <small className="d-block text-body-secondary">C</small>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Home;
