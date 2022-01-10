import axios from 'axios';

axios.interceptors.response.use(response => {
   return response;
}, error => {
  if (error.response.status === 401 && error.response.data.message) {
    return error.response
  }
  return error;
});

const url = 'http://localhost:8000';

export const getAllPosts = () => axios.get(`${url}/posts`);
export const getPostById = (id) => axios.get(`${url}/posts/${id}`);

export const login = (username, password) => axios.post(`${url}/auth/login`, {username, password});
// export const createPost = (newPost) => axios.post(url, newPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);