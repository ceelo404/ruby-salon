import React from 'react';

const CloseIcon = ({ color = '#1b1b1f' }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) {
    return null;
  }

  // Prevent clicks inside the content from closing the modal
  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay is-visible" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close-btn" aria-label="Close modal" onClick={onClose}>
            <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
