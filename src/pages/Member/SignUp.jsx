import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';
import { getId, join } from '../../api/member';

const SignUp = () => {

  const navi = useNavigate();

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
console.log("중복확인 id:", joinData.id);

  getId(joinData.id).then(resp => {
    if(resp.data === true){
      alert("사용 불가능한 ID 입니다.")
    }
    else{
      alert("사용 가능한 ID 입니다.")
    }
  })
}

// 회원가입
const handleChange = (e) => {
  const {name, value} = e.target;
  setJoinData(prev => ({...prev, [name]:value}))
}

// 회원가입 버튼
const handleAdd = () => {
  join(joinData).then(resp => {
    alert("회원가입이 완료되었습니다.");
    navi("/Login");
  })
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
                <input type="text" name="id" value={joinData.id} id="userId" placeholder="Enter ID" required onChange={handleChange}/>
              </div>
              <button type="button" className={styles.searchBtn} onClick={handleDupCheck}>중복확인</button>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <input type="password" name="pw" id="password" value={joinData.pw} placeholder="••••••••" required onChange={handleChange}/>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <div className={styles.inputWrapper}>
              <input type="text" name="name" id="name" value={joinData.name} placeholder="Full Name" required onChange={handleChange}/>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone">Phone</label>
            <div className={styles.inputWrapper}>
              <input type="tel" name="phone" id="phone" value={joinData.phone} placeholder="010-1234-5678" required onChange={handleChange}/>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <div className={styles.inputWrapper}>
              <input type="email" name="email" id="email" value={joinData.email} placeholder="name@example.com" required onChange={handleChange}/>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Address</label>
            <div className={styles.addressGroup}>
              <div className={styles.zonecodeWrapper}>
                <div className={styles.inputWrapper}>
                  <input type="text" name="zonecode" id="zonecode" value={joinData.zonecode} placeholder="Zonecode" readOnly />
                </div>
                <button type="button" className={styles.searchBtn} onClick={handlePostCode}>Search</button>
              </div>
              <div className={styles.inputWrapper}>
                <input type="text" name="address1" id="address1" value={joinData.address1} placeholder="Main Address" readOnly />
              </div>
              <div className={styles.inputWrapper}>
                <input type="text" name="address2" id="address2" value={joinData.address2} placeholder="Detailed Address" onChange={handleChange}/>
              </div>
            </div>
          </div>
          
          <button className={styles.signUpBtn} onClick={handleAdd}>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
