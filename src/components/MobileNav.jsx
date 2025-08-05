import React from 'react';

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

// This component receives props to control its visibility and handle clicks
const MobileNav = ({ 
  isOpen, 
  onClose, 
  onBookNowClick, 
  onServicesClick, 
  onStylistBioClick,
  onFindUsClick, 
  onHoursClick 
}) => {

  const handleLinkClick = (e, action) => {
    e.preventDefault();
    action(); // Call the specific action (e.g., onServicesClick)
    onClose();  // Close the nav after a link is clicked
  };

  return (
    <nav className={`mobile-nav ${isOpen ? 'is-open' : ''}`}>
      <button className="nav-close-btn" aria-label="Close navigation menu" onClick={onClose}>
        <CloseIcon />
      </button>
      <a href="#" onClick={(e) => handleLinkClick(e, onBookNowClick)} title="Book your hair appointment online">Book Now</a>
      <a href="#" onClick={(e) => handleLinkClick(e, onServicesClick)} title="View our hair salon services">Our Services</a>
      <a href="#" onClick={(e) => handleLinkClick(e, onStylistBioClick)} title="Meet the stylist">Meet the Stylist</a>
      <a href="https://venmo.com/u/Brandy-Claussen" title="Tip your stylist online">Tip Online</a>
      <a href="tel:+14043893114" title="Call Ruby Hair Salon">Contact Us</a> 
      <a href="#" onClick={(e) => handleLinkClick(e, onFindUsClick)} title="Find Ruby Hair Salon on the map">Find Us</a>
      <a href="#" onClick={(e) => handleLinkClick(e, onHoursClick)} title="View Ruby Hair Salon's operating hours">Our Hours</a>
    </nav>
  );
};

export default MobileNav;
