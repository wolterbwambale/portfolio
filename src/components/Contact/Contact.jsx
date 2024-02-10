import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer>
      <div>
        <h1>Contact</h1>
        <p>Feel free to reachout to me</p>
      </div>
      <ul>
        <li>
          <img src={getImageUrl("contact/mail.png")} alt="" />
          <a href="mailto:benplaan1@gmail.com">benplaan1@gmail.com</a>
        </li>
        <li>
          <img src={getImageUrl("contact/linkedin.png")} alt="" />
          <a href="mailto:benplaan1@gmail.com">benplaan1@gmail.com</a>
        </li>
        <li>
          <img src={getImageUrl("contact/github.png")} alt="" />
          <a href="mailto:benplaan1@gmail.com">benplaan1@gmail.com</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
