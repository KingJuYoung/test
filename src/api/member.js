import axios from './axios';

export const login = (data) => axios.post('/members/login', data);
export const signUp = (data) => axios.post('/members/signup', data);
export const getMyInfo = () => axios.get('/members/me');
