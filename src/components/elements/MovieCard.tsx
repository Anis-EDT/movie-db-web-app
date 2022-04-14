import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import Modal from "./MovieModal";
import MovieDetails from "./MovieDetails";
import Spinner from "./Spinner";

// Custom Hook
import { useMovieFetch } from "../hooks/custom/useMovieFetch";

// Styled Components
import { StyledMovieCard } from "../styles/StyledMovieCard";

interface movieCardProps {
  image : string,
  movieId : string, 
  clickable : boolean
}

const MovieCard = ({ image, movieId, clickable }: movieCardProps) => {
  const [isModal, setModal] = useState(false);

  const [movie, loading, error] = useMovieFetch(movieId);

  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
    <StyledMovieCard>
      <>
        <Modal isVisible={isModal} onClose={() => setModal(false)}>
          <MovieDetails movie={movie} />
        </Modal>
        {clickable ? (
          <>
            <img
              className="clickable"
              src={image}
              alt="moviecard"
              onClick={() => setModal(true)}
            />
       
          </>
        ) : (
          <img src={image} alt="moviecard" />
        )}
      </>
    </StyledMovieCard>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.string,
  clickable: PropTypes.bool,
};

export default MovieCard;
