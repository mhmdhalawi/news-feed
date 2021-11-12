import { getNews } from '../helpers';
import { useInfiniteQuery } from 'react-query';

export const useFetchNews = (params) => {
  return useInfiniteQuery('news', ({ pageParam = 0 }) => getNews({ page: pageParam, ...params }), {
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.hits === lastPage.meta.offset) {
        return undefined;
      } else {
        return lastPage.meta.offset / 10 + 1;
      }
    },
  });
};
