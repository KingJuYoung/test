import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BoardDetail.module.css';

const BoardDetail = () => {
  // Dummy data for presentation
  const board = {
    title: '프로젝트 팀원 구합니다.',
    author: '프론트엔드개발자',
    date: '2026-05-08 14:30',
    views: 125,
    content: `안녕하세요, React 스터디 프로젝트를 진행할 팀원을 모집합니다.
    
주 2회 온라인으로 진행할 예정이며, 프론트엔드 및 백엔드 개발자 모두 환영합니다.
관심 있으신 분들은 댓글 남겨주세요!
`
  };

  return (
    <div className={styles.container}>
      {/* Article Section */}
      <div className={styles.articleSection}>
        <div className={styles.articleHeader}>
          <h1>{board.title}</h1>
          <div className={styles.meta}>
            <span className={styles.author}>{board.author}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.date}>{board.date}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.views}>조회수 {board.views}</span>
          </div>
        </div>

        <div className={styles.contentBody}>
          {board.content.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className={styles.actions}>
          <div className={styles.leftActions}>
            <Link to="/board" className={styles.backBtn}>← 목록으로</Link>
          </div>
          <div className={styles.rightActions}>
            <button className={styles.editBtn}>수정</button>
            <button className={styles.deleteBtn}>삭제</button>
          </div>
        </div>
      </div>

      {/* Reply Section Placeholder */}
      <div className={styles.replySection}>
        <h3 className={styles.replyTitle}>댓글 (0)</h3>
        <div className={styles.replyPlaceholder}>
          {/* 댓글 입력창 및 리스트가 들어갈 자리 */}
          <p>여기에 댓글 컴포넌트가 렌더링될 예정입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
