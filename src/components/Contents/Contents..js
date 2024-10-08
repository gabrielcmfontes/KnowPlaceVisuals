import styles from "./Contents.module.css";
import NodeJsLogo from "../../img/Content/TecLogos/nodeJS.png";
import ReactLogo from "../../img/Content/TecLogos/React.png";
import MySqlLogo from "../../img/Content/TecLogos/mysql.png";
import React from 'react';

function Contents() {
    return (
        <div className={styles.Content}>
            <h2>Study Our Contents</h2>
            <div className={styles.StudyOur}>
                <div>
                    <img src={NodeJsLogo} alt="NodeJS Logo" />
                    <h2>NodeJS</h2>
                    <p>Discover the power of Node.js for server-side programming. Build scalable network applications with this fast, JavaScript-based runtime environment.</p>
                </div>
                <div>
                    <img src={ReactLogo} alt="React Logo" />
                    <h2>React</h2>
                    <p>Master ReactJS to create dynamic and responsive user interfaces. This powerful JavaScript library is essential for modern web development.</p>
                </div>
                <div>
                    <img src={MySqlLogo} alt="MySQL Logo" />
                    <h2>MySQL</h2>
                    <p>Learn how to manage and query databases efficiently with MySQL, one of the most popular relational database management systems.</p>
                </div>
            </div>
        </div>
    );
}

export default Contents;
