import React from "react";
import "./Contact.css";
import Contactsection from "../component/Contactsection";
function Contact() {
  return (
    <>
      <section className="contact-hero-section">
        <div>
          <span className="hero-badge-section">Our Services</span>
          <h1>Comprehensive Medical Travel Support</h1>
          <p>
            End-to-end assistance for your entire healthcare journey in India
          </p>  
        </div>
      </section>
      <Contactsection />
    </>
  );
}

export default Contact;
