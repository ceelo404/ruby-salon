import React from 'react';
import stylistImageUrl from '../assets/brandy.png'; 

// 1. Receive the onBookNowClick function as a "prop"
const StylistBio = ({ onBookNowClick }) => {

  // 2. Create a handler function for the new button
  const handleBookNow = (e) => {
    e.preventDefault();
    if (onBookNowClick) {
      onBookNowClick();
    }
  };

  return (
    <div className="stylist-bio">
      <div className="stylist-image-container">
        <img src={stylistImageUrl} alt="A photo of Brandy Claussen Holland, master stylist at Ruby Salon" />
      </div>
      <div className="stylist-text-container">
        <h3>Brandy Claussen Holland</h3>
        <h4>Master Stylist & Colorist</h4>
        <p>
          With over 20 years of dedicated experience, Brandy is the heart and soul of Ruby Salon. A graduate of the prestigious Vidal Sassoon Academy, she brings a foundation of precision cutting to every client.
        </p>
        <p>
          Brandy specializes in creating beautiful, low-maintenance looks, from lived-in blondes to dimensional brunettes. Her expertise with curly hair ensures that every texture is celebrated and perfectly styled. She is passionate about crafting a personalized look that reflects your unique style and personality.
        </p>

        {/* 3. Add the new button inside a conditional render.
            This means the button will ONLY appear if the onBookNowClick function is provided. */}
        {onBookNowClick && (
          <div className="button-container" style={{ marginTop: '20px' }}>
            <a href="#" onClick={handleBookNow} className="button">
              Book An Appointment
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

export default StylistBio;
