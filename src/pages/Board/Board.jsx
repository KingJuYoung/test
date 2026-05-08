import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styles from './Board.module.css';

const Board = () => {
  const location = useLocation();
  const isBoardList = location.pathname === '/board' || location.pathname === '/board/';

  return (
    <div className={styles.container} style={{ textAlign: 'center' }}>
      {isBoardList ? (
        <Link to="/board/write" className={styles.writeBtn}>New Post</Link>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Board;
