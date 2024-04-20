import React from "react";
import "./Contact.css";

const Contacts = () => {
  return (
    <div className="contact-list">
      <h2 className="section__title coral my-5">Lets talk</h2>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ericbongomin@gmail.com"
            className="social-list__link"
            target="_blank"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://wa.me/+256775008904"
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/bongomin-erick-juma/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <h3 className="phone">+256 775 008 904</h3>
    </div>
  );
};

export default Contacts;
