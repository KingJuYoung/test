import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BoardWrite.module.css';

const BoardWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add API call to submit the post
    console.log('Submitted:', { title, content });
    navigate('/board'); // Redirect after submit
  };

  return (
    <div className={styles.container}>
      <div className={styles.writeSection}>
        <div className={styles.header}>
          <h1>새 글 작성</h1>
          <p className={styles.subtitle}>새로운 게시글을 작성해주세요.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="게시글 제목을 입력하세요"
              required
              autoFocus
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="게시글 내용을 입력하세요"
              required
            ></textarea>
          </div>

          <div className={styles.actions}>
            <button 
              type="button" 
              className={styles.cancelBtn} 
              onClick={() => navigate('/board')}
            >
              취소
            </button>
            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={!title.trim() || !content.trim()}
            >
              등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoardWrite;
