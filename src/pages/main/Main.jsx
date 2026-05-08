import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.container} style={{ alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <Link to="/signup" className={styles.ctaButton}>Get Started for Free</Link>
    </div>
  );
};

export default Main;
