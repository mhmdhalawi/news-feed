import { getNews } from '../helpers';
import { useInfiniteQuery } from 'react-query';

export const useFetchNews = (params) => {
  return useInfiniteQuery('news', ({ pageParam = 0 }) => getNews({ page: pageParam, ...params }));
};
