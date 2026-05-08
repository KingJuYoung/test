import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Board.module.css';

const Board = () => {
  return (
    <div className={styles.container}>
      <h1>Board</h1>
      <Outlet />
    </div>
  );
};

export default Board;
