import React from "react";
import Phone from "../../img/Cards/phone.png";
import World from "../../img/Cards/world.png";
import Badge from "../../img/Cards/badge.png";
import styles from "./WhyCards.module.css";

function WhyCards() {
  return (
    <div className={styles.WhyCardsContainer}>
      <section className={styles.WhyCards}>
        <div className={styles.LeftCard}>
          <img src={Phone} alt="headphone" />
          <h3>100% Instructor Support</h3>
          <p>
            Never get stuck with a question. Our instructors are available to
            help you anytime.
          </p>
        </div>
        <div className={styles.BigCard}>
          <img src={Badge} alt="badge" />
          <h3>Updated Curriculum</h3>
          <p>
            Our course is constantly updated to include the latest trends and
            technologies, ensuring you learn the most relevant skills.
          </p>
        </div>
        <div className={styles.RightCard}>
          <img src={World} alt="world" />
          <h3>Active Community</h3>
          <p>
            Join a network of students and professionals. Exchange experiences
            and collaborate on projects.
          </p>
        </div>
      </section>
    </div>
  );
}

export default WhyCards;
