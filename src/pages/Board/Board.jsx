import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Board.module.css';
import { getBoards } from '../../api/board';

const Board = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBoards().then(resp => {
      setPosts(resp.data);
    }).catch(err => {
      console.error("Error fetching boards:", err);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>게시판</h1>
          <p className={styles.subtitle}>자유롭게 의견을 나누고 정보를 공유하세요.</p>
        </header>

        <div className={styles.actions}>
          <div className={styles.searchWrapper}>
            <input 
              type="text" 
              placeholder="검색어를 입력하세요..." 
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.searchBtn}>검색</button>
          </div>
          
            <Link to="/board/write" className={styles.writeBtn}>
              <span className={styles.plusIcon}>+</span> 새 글 쓰기
            </Link>
          
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thNo}>번호</th>
                <th className={styles.thTitle}>제목</th>
                <th className={styles.thAuthor}>작성자</th>
                <th className={styles.thDate}>작성일</th>
                <th className={styles.thViews}>조회수</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.seq} className={styles.row}>
                  <td className={styles.tdNo}>{post.seq}</td>
                  <td className={styles.tdTitle}>
                    <Link to={`/board/${post.seq}`} className={styles.postLink}>
                      {post.title}
                    </Link>
                  </td>
                  <td className={styles.tdAuthor}>{post.writer}</td>
                  <td className={styles.tdDate}>{post.write_date}</td>
                  <td className={styles.tdViews}>{post.view_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <button className={styles.pageBtn} disabled>&lt;</button>
          <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
          <button className={styles.pageBtn}>2</button>
          <button className={styles.pageBtn}>3</button>
          <button className={styles.pageBtn}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Board;
