import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BoardDetail.module.css';

const BoardDetail = () => {
  return (
    <div className={styles.container} style={{ textAlign: 'center' }}>
      <div className={styles.actions} style={{ border: 'none', justifyContent: 'center', gap: '20px' }}>
        <Link to="/board" className={styles.backBtn}>← Back</Link>
        <button className={styles.editBtn}>Edit</button>
        <button className={styles.deleteBtn}>Delete</button>
      </div>
    </div>
  );
};

export default BoardDetail;
