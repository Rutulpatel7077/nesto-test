import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'x-nesto-candidat': 'Rutul Patel',
};

const Axios = axios.create({
  baseURL: `https://nesto-fe-exam.vercel.app/api`,
  headers: headers,
  timeout: 25000,
});

export default Axios;