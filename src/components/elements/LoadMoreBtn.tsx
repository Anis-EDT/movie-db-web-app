import React from "react";
import PropTypes from "prop-types";

// Styled Components
import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";

interface LoadMoreBtnProps{
  text : string,
  callback : Function
}

const LoadMoreBtn = ({ text, callback } : LoadMoreBtnProps) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
);

LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default LoadMoreBtn;
