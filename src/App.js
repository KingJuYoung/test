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
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/board">Board</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/mypage">My Page</Link></li>
          </ul>
        </nav>

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
      </div>
    </Router>
  );
}

export default App;
