import React from "react";
import PropTypes from "prop-types";

// Styled Components
import {
  StyledMovieWall,
  StyledMovieWallContent,
} from "../styles/StyledMovieWall";

interface MovieWallProps{
  header: string,
  children : React.ReactNode
}
const MovieWall = ({ header, children }: MovieWallProps) => (
  <StyledMovieWall>
    <h1>{header}</h1>
    <StyledMovieWallContent>{children}</StyledMovieWallContent>
  </StyledMovieWall>
);

MovieWall.propTypes = {
  header: PropTypes.string,
  children : PropTypes.node
};

export default MovieWall;
