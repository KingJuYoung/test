import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <h2>Login</h2>
          <p>Please enter your details to sign in.</p>
        </div>
        
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="userId">ID</label>
            <div className={styles.inputWrapper}>
              <input 
                type="text" 
                id="userId" 
                placeholder="Enter your ID" 
                required 
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
              />
            </div>
          </div>
          
          <button type="submit" className={styles.loginBtn}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
