import React from 'react';
import styles from './Mypage.module.css';

const Mypage = () => {
  return (
    <div className={styles.container} style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <button className={styles.actionCard} style={{ cursor: 'pointer' }}>My Posts</button>
      <button className={styles.actionCard} style={{ cursor: 'pointer' }}>Settings</button>
    </div>
  );
};

export default Mypage;
