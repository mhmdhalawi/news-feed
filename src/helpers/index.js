import { api } from '../axios';

export const getNews = async (params) => {
  try {
    const response = await api.get('/articlesearch.json', {
      params: {
        'api-key': `${import.meta.env.VITE_API_KEY}`,
        ...params,
      },
    });
    return response.data.response;
  } catch (error) {
    console.log(error.message);
  }
};
