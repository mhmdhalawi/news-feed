import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useStore } from '../../store';

export default function index() {
  const { id } = useParams();
  const setFilterArticles = useStore((state) => state.setFilterArticles);
  const filterArticle = useStore((state) => state.filteredArticle);
  // const articles = useStore((state) => state.articles);
  useEffect(() => {
    setFilterArticles(id);
  }, []);

  console.log('filtered', filterArticle);
  // console.log('articles', articles);
  return <div>Article</div>;
}
