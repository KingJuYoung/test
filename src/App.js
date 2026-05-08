import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // 심플한 로그인 검증 로직 (중앙 관리 예시)
    if (credentials.username === 'admin' && credentials.password === '1234') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('아이디 또는 비밀번호가 틀렸습니다.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCredentials({ username: '', password: '' });
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <div className="dashboard-container">
            <h1>환영합니다, {credentials.username}님!</h1>
            <p>로그인에 성공하셨습니다.</p>
            <button className="logout-button" onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        ) : (
          <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
              <h2>로그인</h2>
              <div className="input-group">
                <label htmlFor="username">아이디</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  placeholder="admin 입력"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  placeholder="1234 입력"
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="login-button">
                로그인
              </button>
            </form>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
