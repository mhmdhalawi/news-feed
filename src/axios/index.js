import axios from 'axios';

export const api = axios.create({
  baseURL: `https://api.nytimes.com/svc/search/v2`,
});
