// src/components/Header.js
import React from 'react';
import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';


const Header = ({ children, background, color }) => {
  return (
    <header className={styles.Header} style={{ background: background, color: color }}>
      <Navbar background={background} /> 
      <div className="header-content">
        {children}
      </div>
    </header>
  );
};

export default Header;
