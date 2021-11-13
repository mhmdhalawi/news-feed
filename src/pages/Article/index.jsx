import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useStore } from '../../store';
import imageDefault from '../../assets/ArticleDefault.jpg';

import { image_url } from '../../constants';

export default function index() {
  const [headline, setHeadline] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [catergory, setCatergory] = useState('');
  const [image, setImage] = useState('');

  const { id } = useParams();
  const setFilteredArticles = useStore((state) => state.setFilterArticles);
  const filteredArticle = useStore((state) => state.filteredArticle);

  useEffect(() => {
    setFilteredArticles(id);
  }, []);

  useEffect(() => {
    if (filteredArticle.length === 1) {
      const { headline, type_of_material, lead_paragraph, multimedia } = filteredArticle[0];
      setHeadline(headline.main);
      setParagraph(lead_paragraph || '');
      setCatergory(type_of_material || '');
      setImage(multimedia.length > 1 ? image_url + multimedia[1].url : imageDefault);
    }
  }, [filteredArticle]);

  return (
    <div className='w-1/2 mx-auto'>
      <img src={image} />
      <h1>{headline}</h1>
      <h1>{catergory}</h1>
      <p>{paragraph}</p>
    </div>
  );
}
