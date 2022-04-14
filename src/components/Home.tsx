import React, { useState } from "react";

// API Variables
import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from "../API";

// Components
import SearchBar from "./elements/SearchBar";
import MovieWall from "./elements/MovieWall";
import MovieCard from "./elements/MovieCard";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

// Custom Hook
import { useHomeFetch } from "./hooks/custom/useHomeFetch";

// Images
import NoImage from "../assets/no_image.jpg";


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const 
    {
      state: { movies, currentPage, totalPages },
      loading,
      error,
      fetchMovies,
    }
    
   = useHomeFetch(searchTerm);

  const searchMovies = (search : string) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${
      currentPage + 1
    }`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };

  if (error) return <div>Something went wrong ...</div>;
  if (!movies[0]) return <Spinner />;
  return (
    <>

      <SearchBar callback={searchMovies} />

      <MovieWall header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map((movie: any) => {
          console.log("heyyyyyy in movie wall", movie.id);
         return( <>
            <MovieCard
              key={movie.id}
              clickable
              image={ 
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
            />
          </>
        )})}
      </MovieWall>

      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load more..." callback={loadMoreMovies} />
      )}
    </>
  );
};

export default Home;
