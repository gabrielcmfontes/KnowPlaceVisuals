import React from 'react';
import styles from './StyledButton.module.css';

const StyledButton = ({ children, backgroundColor }) => {
  return (
    <button
      className={`${styles.styledButton} ${styles[backgroundColor]}`}
      style={{ backgroundColor }}
    >
      <div className={styles.buttonContent}>
        {children}
      </div>
    </button>
  );
};

export default StyledButton;
