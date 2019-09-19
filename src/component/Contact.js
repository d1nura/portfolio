import React from "react";
import "../scss/contact.scss";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <ul id="iconList">
        <li>
          <i class="fas fa-envelope"></i> ddakshitha1@gmail.com
        </li>
        <li>
          <a href="https://www.facebook.com/dinura.dakshitha">
            <i class="fab fa-facebook-square"></i> facebook
          </a>
        </li>
        <li>
          <i class="fas fa-envelope"></i> ddakshitha1@outlook.com
        </li>
      </ul>
    </div>
  );
}

export default Contact;
