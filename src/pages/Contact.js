import React from "react";
import IMG from "../assets/fooda.jpeg";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${IMG})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" placeholder="Enter full name..." />
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Enter mail..." />
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Enter message..." />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
