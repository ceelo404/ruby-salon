import React from 'react';
import StylistBio from './StylistBio'; // We'll put the bio content inside this section

const StylistSection = () => {
  return (
    <section className="stylist-section">
      <div className="container">
        <h2>Meet Our Stylist</h2>
        <StylistBio />
      </div>
    </section>
  );
};

export default StylistSection;
