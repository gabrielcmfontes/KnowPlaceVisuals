import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar'
import styles from './CTrail.module.css';
import Smile from '../../img/CTrail/TrailsPhotos/smile.png';
import Nerd from '../../img/CTrail/TrailsPhotos/nerd.png';
import Robot from '../../img/CTrail/TrailsPhotos/robot.png';

function CTrail() {
    const handleCardClick = (level) => {
        console.log(`${level} card clicked`); // Aqui você pode adicionar a lógica para navegação ou outra ação
    };

    return (
        <section className={styles.Box}>
            <Navbar/>
            <div className={styles.headerContent}>
                    <h2>CHOOSE YOUR LEARNING LEVEL:</h2>
                </div>
                <div className={styles.cardContainer}>
                    <button className={styles.cardButton} onClick={() => handleCardClick('Beginners')}>
                        <img src={Smile} alt="Beginners" />
                        <h2>Beginner</h2>
                        <p>Tracks for those just starting to learn a new subject.</p>
                    </button>
                    <button className={styles.cardButton} onClick={() => handleCardClick('Intermediary')}>
                        <img src={Nerd} alt="Intermediary" />
                        <h2>Intermediary</h2>
                        <p>Tracks for those with basic knowledge looking to delve deeper.</p>
                    </button>
                    <button className={styles.cardButton} onClick={() => handleCardClick('Advanced')}>
                        <img src={Robot} alt="Advanced" />
                        <h2>Advanced</h2>
                        <p>Tracks for advanced users seeking specialization and advanced knowledge.</p>
                    </button>
                </div>
        </section>
    );
}

export default CTrail;
