import React from 'react';

const FindUsSection = () => {
  return (
    <section id="find-us" className="more-info">
      <div id="find-us-anchor" className="scroll-anchor"></div>
      <h2 className="visually-hidden">Visit Ruby Hair Salon - Your Trusted Hairdresser in Decatur</h2>
      
      <div className="find-us-content-wrapper">
        <div className="map-and-hours-container">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13265.875770806726!2d-84.29727690740961!3d33.77438646705779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f507b27fa45657%3A0x1ded6e63a498978a!2sRuby%20Hair%20Salon!5e0!3m2!1sen!2sus!4v1753991876365!5m2!1sen!2sus" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Google Map of Ruby Hair Salon location in Decatur, GA"
            ></iframe>
          </div>
          <div className="hours-display-desktop">
            <h3>Our Hours</h3>
            <div className="hours-content">
              <p>Monday: <span>10:15 AM – 5:00 PM</span></p>
              <p>Tuesday: <span>11:00 AM – 5:00 PM</span></p>
              <p>Wednesday: <span>11:00 AM – 5:00 PM</span></p>
              <p>Thursday: <span>12:00 PM – 7:00 PM</span></p>
              <p>Friday: <span>10:15 AM – 4:00 PM</span></p>
              <p>Saturday: <span>10:00 AM – 4:00 PM</span></p>
              <p>Sunday: <span>Closed</span></p>
            </div>
            <p className="parking-info">Validated 2Hr Parking in the AMLI parking garage 122 W Trinity Pl.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
