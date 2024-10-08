import Header from "../../components/Header/Header";
import styles from "./Course.module.css";

function Course(){
    return(
        <div className={styles.CoursePage}>
            <Header>
                <h2>
                    We're working in this page
                </h2>
            </Header>
        </div>
    );
};

export default Course;