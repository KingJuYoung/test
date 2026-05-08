import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BoardWrite.module.css';

const BoardWrite = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container} style={{ textAlign: 'center' }}>
      <div className={styles.actions} style={{ border: 'none', justifyContent: 'center' }}>
        <button type="button" className={styles.cancelBtn} onClick={() => navigate('/board')}>Cancel</button>
        <button type="button" className={styles.submitBtn}>Publish Post</button>
      </div>
    </div>
  );
};

export default BoardWrite;
