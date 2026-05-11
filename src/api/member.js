import axios from './axios';

// export const login = (data) => axios.post('/members/login', data);
// export const getMyInfo = () => axios.get('/members/me');

// 아이디 중복확인
export const getId = (id) => axios.get('/member/dupleCheck', {params : {id : id}});

// 회원가입
export const join = (joinData) => axios.post('/member', joinData);

// 로그인
export const signin = (user) => axios.post('/member/login', user);

