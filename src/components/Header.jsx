import React from 'react';
import logo from '../assets/ruby_mod_vidTransparent_Logo.png';

// THE FULL SVG CODE IS NOW INCLUDED HERE
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header = ({ onNavToggle, onBookNowClick }) => {
  const handleBookNow = (e) => {
    e.preventDefault();
    onBookNowClick();
  };

  return (
    <header className="site-header">
      <img src={logo} alt="Ruby Hair Salon official logo" className="logo" loading="lazy" />
      <div className="header-buttons">
        <a href="#" onClick={handleBookNow} className="button secondary-button" title="Book your hair appointment online">Book Now</a>
        <a href="https://venmo.com/u/Brandy-Claussen" className="button" title="Tip your stylist online via Venmo">Tip Online</a>
      </div>
      <button className="mobile-nav-toggle" aria-label="Open navigation menu" onClick={onNavToggle}>
        <MenuIcon />
      </button>
    </header>
  );
};

export default Header;
