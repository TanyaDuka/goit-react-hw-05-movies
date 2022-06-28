import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const KEY = '067f291d21ed1c6d30bd9ade17d843cc';

export async function trendMovies() {
    const params = {
      api_key: KEY,         
    };
    try{
        const response = await axios('trending/movie/day', {params});
        return response.data;
    } catch(error) {
        console.error(error);
    }    
  };

  export async function searchMovie( searchQuery = '') {
    const params = {
      api_key: KEY,
      query: searchQuery          
    };
    try{
        const response = await axios('search/movie', {params});
        return response.data;
    } catch(error) {
        console.error(error);
    }    
  };
  
  export async function movieById( id = '') {
    const params = {
      api_key: KEY,               
    };
    try{
        const response = await axios(`movie/${id}`, {params});
        return response.data;
    } catch(error) {
        console.error(error);
    }    
  };

  export async function movieCredits( id = '') {
    const params = {
      api_key: KEY,               
    };
    try{
        const response = await axios(`movie/${id}/credits`, {params});
        return response.data;
    } catch(error) {
        console.error(error);
    }    
  };

  export async function movieReviews( id = '') {
    const params = {
      api_key: KEY,               
    };
    try{
        const response = await axios(`movie/${id}/reviews`, {params});
        return response.data;
    } catch(error) {
        console.error(error);
    }    
  };
  
  
