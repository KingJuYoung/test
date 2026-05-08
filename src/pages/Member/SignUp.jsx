import React from 'react';
import styles from './SignUp.module.css';

const SignUp = () => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.signUpBtn}>Create Account</button>
    </div>
  );
};

export default SignUp;
