import React from 'react';
import styles from './OurCompany.module.css';
import OurCompanyImg from '../../img/OurCompany/OurCompany.png';

function OurCompany() {
  return (
    <section className={styles.OurCompany}>
      <div className={styles.OCImageContent}>
        <img src={OurCompanyImg} alt="The Office Team" />
      </div>
      <div className={styles.OCTextContent}>
        <h2>Our Company</h2>
        <p>
          At our core, we are dedicated to transforming passionate individuals
          into skilled web developers. Our mission is to provide an accessible,
          comprehensive, and practical education in web development, ensuring
          that every student is well-equipped to thrive in the tech industry. We
          believe in fostering an inclusive and respectful learning environment.
          We welcome and support students from all backgrounds, cultures, and
          experiences, ensuring that everyone feels valued and empowered to
          achieve their goals.
        </p>
      </div>
    </section>
  );
}

export default OurCompany;
