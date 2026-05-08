import axios from './axios';

export const getBoards = () => axios.get('/boards');
export const getBoard = (id) => axios.get(`/boards/${id}`);
export const createBoard = (data) => axios.post('/boards', data);
export const updateBoard = (id, data) => axios.put(`/boards/${id}`, data);
export const deleteBoard = (id) => axios.delete(`/boards/${id}`);
