import axios from 'axios';

const api = 'https://obscure-gorge-38584.herokuapp.com/api';

export const register = async (data) => {
  try {
    const response = await axios.post(`${api}/users`, data);
    alert('Successfully submitted');
    console.log(response.data);
  } catch (error) {
    alert(error.message);
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${api}/login`, data);
    window.sessionStorage.setItem('username', response.data.username);
    window.sessionStorage.setItem('email', response.data.email);
    window.sessionStorage.setItem('token', response.data.token);
  } catch (error) {
    alert(error.message);
  }
};
