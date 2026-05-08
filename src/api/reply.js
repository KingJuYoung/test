import axios from './axios';

export const getReplies = (boardId) => axios.get(`/replies/board/${boardId}`);
export const createReply = (data) => axios.post('/replies', data);
export const deleteReply = (id) => axios.delete(`/replies/${id}`);
