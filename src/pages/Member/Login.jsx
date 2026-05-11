import React, { useState } from 'react';
import styles from './Login.module.css';
import useAuthStore from '../../store/authStore';
import Main from '../main/Main';
import { signin } from '../../api/member';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navi = useNavigate();

  const [user, setUser] = useState({id: "", pw: ""});
  const { token, login, logout } = useAuthStore();

  const handleChange = (e) => {
    const{name, value} = e.target;
    setUser(prev => ({...prev, [name]:value}))
  }

  const handleAdd = () => {
    signin(user).then(resp => {
      console.log("zz",resp.data);
      login(resp.data);
      navi("/");
    })
  }
  
  const handleLogout = () => {
    logout();
    navi("/login");
  }

  if (token) {
    return (
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <h2>Logout</h2>
            <p>You are currently logged in.</p>
          </div>
          <button className={styles.loginBtn} onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <h2>Login</h2>
          <p>Please enter your details to sign in.</p>
        </div>
        
          <div className={styles.inputGroup}>
            <label htmlFor="userId">ID</label>
            <div className={styles.inputWrapper}>
              <input 
                type="text" 
                id="userId" 
                placeholder="Enter your ID" 
                required 
                name="id"
                value={user.id}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <input 
                type="password" 
                id="password" 
                placeholder="••••••••" 
                required 
                name="pw"
                value={user.pw}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <button className={styles.loginBtn} onClick={handleAdd}>Login</button>
      </div>
    </div>
  );
};

// 로그인/로그아웃
// const MainBox = () => {

//   const logout = useAuthStore(state => state.logout)
//   const loginId = useAuthStore(state => state.loginId)

//   const handleLogout = () => {
//     logout();
//   }
// }

// const LoginToken = () => {

//   const token = useAuthStore(state => state.token);

//   return(
//     token ? <Main /> : <Login />
//   );
// };

export default Login;
