import React, { useEffect } from "react";

// Styled Components
import { StyledMovieModal } from "../styles/StyledMovieModal";
interface modalProps {
  isVisible : boolean , 
  children: any,
  onClose: Function
}

const Modal = ({ isVisible = false, children, onClose } : modalProps) => {
  
  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  function keydownHandler({ key } : any) {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  }

  return !isVisible ? null : (
    <StyledMovieModal>
      <div className="modal" onClick={() => onClose() }>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <span className="modal-close" onClick={() => onClose() }>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </div>
    </StyledMovieModal>
  );
};

export default Modal;
