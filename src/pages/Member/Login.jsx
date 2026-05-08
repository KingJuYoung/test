import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.loginBtn}>Sign In</button>
    </div>
  );
};

export default Login;
