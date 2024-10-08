import React from 'react';
import Header from "../../components/Header/Header";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.ContactPage}>
      <Header>
        <h1>Contact</h1>
        <p>Send us a message!</p>
      </Header>
    </div>
  );
}   

export default Contact;