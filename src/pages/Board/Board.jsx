import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Board.module.css';
import { getBoards } from '../../api/board';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Board = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getBoards().then(resp => {
      setPosts(resp.data);
    }).catch(err => {
      console.error("Error fetching boards:", err);
    });
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.writer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = page * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

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
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
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
              {currentPosts.map((post) => (
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

        <div className={styles.paginationContainer}>
          <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
            <Pagination 
              count={Math.ceil(filteredPosts.length / itemsPerPage)} 
              page={page} 
              onChange={handleChange} 
              color="primary" 
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Board;
