import styles from "../Recommendation/recommendation.module.css";
import studentImg from "../../img/Reco/student.png";

function Recommendation() {
  return (
    <section className={styles.Recommendation}>
      <div className={styles.RecoText}>
        <p>
          "Enrolling in this web development course was one of the best
          decisions I've ever made. The instructors are incredibly supportive,
          always available to answer questions and provide guidance. The
          hands-on projects helped me build a strong portfolio, and the updated
          curriculum ensured I was learning the latest technologies. The respect
          and inclusivity shown to all students made the learning environment
          welcoming and encouraging. Thanks to this course, I now have the
          skills and confidence to pursue a successful career in web
          development."
        </p>
        <span className={styles.highlight}>Alexa Thompson</span>
      </div>
      <div className={styles.RecoImage}>
        <img src={studentImg} alt="Student" />
      </div>
    </section>
  );
}

export default Recommendation;
