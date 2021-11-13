import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useStore } from '../../store';
import imageDefault from '../../assets/ArticleDefault.jpg';

import { image_url } from '../../constants';

export default function index() {
  const { id } = useParams();
  const setFilterArticles = useStore((state) => state.setFilterArticles);
  const filterArticle = useStore((state) => state.filteredArticle);
  useEffect(() => {
    setFilterArticles(id);
  }, []);

  const {
    headline: { main },
    lead_paragraph,
    type_of_material,
    multimedia,
  } = filterArticle[0];
  const image = multimedia[1].url ? image_url + multimedia[1].url : imageDefault;

  return (
    <div className='w-1/2 mx-auto'>
      <img src={image} />
      <h1>{main}</h1>
      <h1>{type_of_material}</h1>
      <p>{lead_paragraph}</p>
    </div>
  );
}
