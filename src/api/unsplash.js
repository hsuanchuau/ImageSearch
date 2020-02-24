import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 1357b9fd00a3c5baf69cfcc913bf3247845571e32dea0600f075a54c08742dcd'
  }
});
