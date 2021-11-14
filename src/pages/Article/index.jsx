import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { useStore } from '../../store';
import imageDefault from '../../assets/ArticleDefault.jpg';

import { image_url } from '../../constants';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

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
    <div className='md:w-1/2 md:mx-auto mx-4 shadow-md rounded py-2 px-8 flex flex-col justify-center mt-5'>
      <img className='rounded my-4  px-10' src={image} />
      <h1 className='font-bold '>{headline}</h1>
      <div className='flex items-center'>
        <h1 className='font-light text-sm'>{catergory}</h1>
        <FacebookShareButton title={headline} url={window.location.href} className='ml-10'>
          <FacebookIcon className='w-8 rounded-lg' />
        </FacebookShareButton>
        <TwitterShareButton title={headline} url={window.location.href} className='ml-2'>
          <TwitterIcon className='w-8 rounded-lg' />
        </TwitterShareButton>
        <LinkedinShareButton title={headline} url={window.location.href} className='ml-2'>
          <LinkedinIcon className='w-8 rounded-lg' />
        </LinkedinShareButton>
      </div>
      <p className='my-4'>{paragraph}</p>
    </div>
  );
}
