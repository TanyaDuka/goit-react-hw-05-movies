import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import SearchBar from '../components/Searchbar/Searchbar';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';
import * as moviesApi from '../services/API';

import 'react-toastify/dist/ReactToastify.css';

export default function MoviesPage() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);
  let navigate = useNavigate();
  const location = useLocation();
  const searchURL = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!movieName) {
      return setMovieName(searchURL);
    }
    moviesApi.getMoviesbySearchQuery(movieName).then(results => {
      if (results.length === 0) {
        toast.error('Ничего не найдено');
        return setMovies(null);
      }
      setMovies(results);
    });
  }, [movieName, searchURL]);

  const handleFormSubmit = query => {
    setMovieName(query);

    navigate({ ...location, search: `query=${query}` });
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <ToastContainer />
      <MoviesGallery movies={movies} />
    </>
  );
}
