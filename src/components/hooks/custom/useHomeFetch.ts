import { useState, useEffect } from 'react';

// Environment Variables
import { POPULAR_BASE_URL } from '../../../API';


interface hookReturn { 
  state : any , 
  loading : boolean,
  error : boolean,
  fetchMovies : Function
}


export const useHomeFetch = (searchTerm: string) : hookReturn    => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint: any) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page');

    try {
      const result = await (await fetch(endpoint)).json();
      setState((prev: any) => ({
        ...prev,
        movies:
          isLoadMore !== -1
            ? [...prev.movies, ...result.results]
            : [...result.results],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (sessionStorage.homeState) {
      setState(JSON.parse(sessionStorage.homeState));
      setLoading(false);
    } else {
      fetchMovies(POPULAR_BASE_URL);
    }
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem('homeState', JSON.stringify(state));
    }
  }, [searchTerm, state]);


  return { state, loading, error , fetchMovies };
};
