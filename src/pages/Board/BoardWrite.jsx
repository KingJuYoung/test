import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BoardWrite.module.css';
import { createBoard } from '../../api/board';
import useAuthStore from '../../store/authStore';

const BoardWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');


  const handleSubmit = async () => {
    try {
      const result = await createBoard({ title:title, contents:contents });
      console.log(result);
      navigate('/board');
    } catch (error) {
      console.error('Error creating board:', error);
      alert('게시글 작성 중 오류가 발생했습니다.');
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.writeSection}>
        <div className={styles.header}>
          <h1>새 글 작성</h1>
          <p className={styles.subtitle}>새로운 게시글을 작성해주세요.</p>
        </div>

        <div className={styles.form}>
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
            <label htmlFor="contents">내용</label>
            <textarea
              id="contents"
              value={contents}
              onChange={(e) => setContents(e.target.value)}
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
              type="button" 
              className={styles.submitBtn}
              onClick={handleSubmit}
              disabled={!title.trim() || !contents.trim()}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
