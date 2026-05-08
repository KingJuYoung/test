import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styles from './Board.module.css';

const Board = () => {
  const location = useLocation();
  const isBoardList = location.pathname === '/board' || location.pathname === '/board/';
  const [searchTerm, setSearchTerm] = useState('');

  // UI 구성을 위한 더미 데이터
  const dummyPosts = [
    { id: 1, title: 'React 프로젝트 시작하기', author: '관리자', date: '2024-05-08', views: 120 },
    { id: 2, title: 'UX 기반 UI 디자인의 중요성', author: '디자이너', date: '2024-05-07', views: 85 },
    { id: 3, title: 'Axios를 이용한 API 통신 팁', author: '개발자', date: '2024-05-06', views: 230 },
    { id: 4, title: 'CSS Module 활용법 가이드', author: '퍼블리셔', date: '2024-05-05', views: 45 },
    { id: 5, title: 'React Router v6 라우팅 설정', author: '개발자', date: '2024-05-04', views: 156 },
  ];

  return (
    <div className={styles.container}>
      {isBoardList ? (
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
                {dummyPosts.map((post) => (
                  <tr key={post.id} className={styles.row}>
                    <td className={styles.tdNo}>{post.id}</td>
                    <td className={styles.tdTitle}>
                      <Link to={`/board/${post.id}`} className={styles.postLink}>
                        {post.title}
                      </Link>
                    </td>
                    <td className={styles.tdAuthor}>{post.author}</td>
                    <td className={styles.tdDate}>{post.date}</td>
                    <td className={styles.tdViews}>{post.views}</td>
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
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Board;
