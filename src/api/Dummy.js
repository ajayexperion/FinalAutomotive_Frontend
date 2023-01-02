import axios from 'axios';

const auth = `${JSON.parse(sessionStorage.getItem('jwt'))}`;
export default axios.create({
  baseURL: 'http://127.0.0.1:8000/product',
  headers: {
    Authorization: auth,
  },

});
