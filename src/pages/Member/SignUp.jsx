import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';

const SignUp = () => {

  const [joinData, setJoinData] = useState({
    id: "",
    pw: "",
    name: "",
    phone: "",
    email: "",
    zonecode: "",
    address1: "",
    address2: ""
  })

  // daum.api 
  const handlePostCode = () => {
  new window.kakao.Postcode({     // 전역객체를 써줘야해서 window. 작성
    oncomplete: function(data) {

      console.log(data.zonecode, data.roadAddress);

      setJoinData(prev => ({...prev, zonecode: data.zonecode, address1: data.roadAddress}));
    }
  }).open();
}

// id 중복 확인 버튼
const handleDupCheck = () => {

}

  return (
    <div className={styles.container}>
      <div className={styles.signUpCard}>
        <div className={styles.header}>
          <h2>Create Account</h2>
        </div>
        
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="userId">ID</label>
            <div className={styles.idWrapper}>
              <div className={styles.inputWrapper} style={{ flex: 1 }}>
                <input type="text" id="userId" placeholder="Enter ID" required onChange={handleChange}/>
              </div>
              <button type="button" className={styles.searchBtn} onClick={handleDupCheck}>중복확인</button>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <input type="password" id="password" placeholder="••••••••" required onChange={handleChange}/>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <div className={styles.inputWrapper}>
              <input type="password" id="passwordConfirm" placeholder="••••••••" required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <div className={styles.inputWrapper}>
              <input type="text" id="name" placeholder="Full Name" required onChange={handleChange}/>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone">Phone</label>
            <div className={styles.inputWrapper}>
              <input type="tel" id="phone" placeholder="010-1234-5678" required onChange={handleChange}/>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <div className={styles.inputWrapper}>
              <input type="email" id="email" placeholder="name@example.com" required onChange={handleChange}/>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Address</label>
            <div className={styles.addressGroup}>
              <div className={styles.zonecodeWrapper}>
                <div className={styles.inputWrapper}>
                  <input type="text" id="zonecode" placeholder="Zonecode" readOnly />
                </div>
                <button type="button" className={styles.searchBtn} onClick={handlePostCode}>Search</button>
              </div>
              <div className={styles.inputWrapper}>
                <input type="text" id="address1" placeholder="Main Address" readOnly />
              </div>
              <div className={styles.inputWrapper}>
                <input type="text" id="address2" placeholder="Detailed Address" onChange={handleChange}/>
              </div>
            </div>
          </div>
          
          <button type="submit" className={styles.signUpBtn}>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
