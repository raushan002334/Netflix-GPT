import React from 'react';
import Header from './Header';
import { API_OPTIONS } from '../utils/constants'; 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies} from '../utils/moviesSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';

const Browse = () => {
    useNowPlayingMovies();



  return (
    <div>
      <Header />
      <MainContainer />
      {/* 
        MainContainer
         -Video Background
         -VideoTitle
        SecondaryContainer
         -MovieList * n
         -cards * n
       */}
    </div>
  )
}

export default Browse;