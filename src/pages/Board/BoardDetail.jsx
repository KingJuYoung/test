import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from './BoardDetail.module.css';
import { getBoard, deleteBoard } from '../../api/board';
import useAuthStore from '../../store/authStore';

const BoardDetail = () => {
  const { id: seq } = useParams();
  const navigate = useNavigate();
  const { loginId } = useAuthStore();
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBoard(seq).then(resp => {
      setBoard(resp.data);
      setLoading(false);
    }).catch(err => {
      console.error("Error fetching board detail:", err);
      setLoading(false);
    });
  }, [seq]);

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteBoard(seq).then(() => {
        alert("삭제되었습니다.");
        navigate('/board');
      }).catch(err => {
        console.error("Error deleting board:", err);
        alert("삭제 중 오류가 발생했습니다.");
      });
    }
  };

  if (loading) return <div className={styles.container}>Loading...</div>;
  if (!board) return <div className={styles.container}>게시글을 찾을 수 없습니다.</div>;

  return (
    <div className={styles.container}>
      <div className={styles.articleSection}>
        <div className={styles.articleHeader}>
          <h1>{board.title}</h1>
          <div className={styles.meta}>
            <span className={styles.author}>{board.writer}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.date}>{board.write_date}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.views}>조회수 {board.view_count}</span>
          </div>
        </div>

        <div className={styles.contentBody}>
          {board.contents?.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className={styles.actions}>
          <div className={styles.leftActions}>
            <Link to="/board" className={styles.backBtn}>← 목록으로</Link>
          </div>
          {loginId === board.writer && (
            <div className={styles.rightActions}>
              <button className={styles.editBtn} onClick={() => navigate(`/board/edit/${seq}`)}>수정</button>
              <button className={styles.deleteBtn} onClick={handleDelete}>삭제</button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.replySection}>
        <h3 className={styles.replyTitle}>댓글 (0)</h3>
        <div className={styles.replyPlaceholder}>
          <p>여기에 댓글 컴포넌트가 렌더링될 예정입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
