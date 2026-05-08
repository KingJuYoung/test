import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/main/Main';
import Board from './pages/Board/Board';
import BoardWrite from './pages/Board/BoardWrite';
import BoardDetail from './pages/Board/BoardDetail';
import Login from './pages/Member/Login';
import SignUp from './pages/Member/SignUp';
import Mypage from './pages/Mypage/Mypage';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <header className={styles.header}>
          <div className={styles.navContainer}>
            <Link to="/" className={styles.logo}>ModernApp</Link>
            
            <nav className={styles.navLinks}>
              <Link to="/" className={styles.navLink}>Home</Link>
              <Link to="/board" className={styles.navLink}>Board</Link>
            </nav>

            <div className={styles.authButtons}>
              <Link to="/mypage" className={styles.navLink}>My Page</Link>
              <Link to="/login" className={styles.loginBtn}>Login</Link>
              <Link to="/signup" className={styles.signUpBtn}>Sign Up</Link>
            </div>
          </div>
        </header>

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/board" element={<Board />}>
              <Route path="write" element={<BoardWrite />} />
              <Route path=":id" element={<BoardDetail />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </main>

        <footer className={styles.footer}>
          <p>© 2026 ModernApp. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
