import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import GuyUs from "../../img/uC.png";
import StyledButton from "../../components/StyledButton/StyledButton";
import WhyCards from "../../components/WhyCards/WhyCards";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import OurCompany from "../../components/OurCompany/OurCompany";
import Contents from "../../components/Contents/Contents.";
import Recommendation from "../../components/Recommendation/recommendation";

function Home() {
  return (
    <section className={styles.Home}>
      <Header>
        <section className={styles.HeaderContent}>
          <div>
            <h2>
              Unlock Your Potential in Web Development! Explore Our Course Now!
            </h2>
            <StyledButton>
              <FontAwesomeIcon icon={faLockOpen} />
              Free Now
            </StyledButton>
          </div>
          <div>
            <img src={GuyUs} alt="tmnc" />
          </div>
        </section>

        <WhyCards />
      </Header>

      <OurCompany />

      <AboutUs />

      <Contents />
      
      <Recommendation />

      <Footer/>
    </section>
  );
}

export default Home;
