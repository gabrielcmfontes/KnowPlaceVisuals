import styles from './AboutUs.module.css';
import AboutImg from '../../img/AboutUs/abtimg.png'
import StyledButton from '../StyledButton/StyledButton';

function AboutUs(){
    return(
        <section className={styles.About}>
            <div>
                <img src={AboutImg} alt="" />
            </div>
            <div>
                <h2>About Us</h2>
                <p>
                    We are a team of passionate educators and industry professionals dedicated to making web development accessible to everyone. With years of  experience in both teaching and working in the field, we understand the challenges and opportunities that come with learning to code. Our goal is to guide you through these challenges and help you seize the opportunities.
                </p>
                <StyledButton>
                    DISCOVER MORE
                </StyledButton>
            </div>
        </section>
    )
}

export default AboutUs;