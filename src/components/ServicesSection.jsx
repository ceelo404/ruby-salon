import React, { useEffect } from 'react';

// Define service data as an array of objects
const serviceCategories = [
  {
    title: 'Haircuts',
    services: [
      { name: "Women's Hair Cut", details: '45 min', description: "Experience a precision haircut tailored to your unique style. Includes a thorough wash, relaxing scalp massage, and professional blow-dry." },
      { name: "Men's Hair Cut", details: '30 min', description: "Sharp and modern cuts designed for men, including consultation and style finish." },
      { name: "Kids Hair Cut (10yr under)", details: '30 min', description: "Expert cuts for our younger clients, ensuring a comfortable and fun experience." },
      { name: "Bang trim", details: '15 min', description: "A complimentary quick trim to keep your bangs looking fresh between appointments." }
    ]
  },
  {
    title: 'Coloring & Treatments',
    services: [
      { name: "One Step Color", details: '1 hr 45 min', description: "Achieve a beautiful, consistent single-process color. Includes toner. (15min 1st Time consultation required)" },
      { name: "Highlights", details: '2 hr', description: "Transform your look with expertly applied highlights, adding dimension and brightness. Includes toner. (15min 1st Time consultation required)" },
      { name: "Toner", details: '1 hr', description: "Refresh your existing color or neutralize unwanted tones for a vibrant finish." },
      { name: "Men's Camo", details: '15 min', description: "Subtle gray blending for a natural, refreshed look for men." },
      { name: "Smoothing Keratin treatment", details: '1 hr', description: "Reduce frizz and enhance shine with our deeply conditioning keratin treatment." },
      // --- ADDED SERVICES ---
      { name: "Balayage", details: 'TBD', description: "Achieve a natural, sun-kissed look with seamlessly blended, hand-painted highlights. (15min 1st Time consultation required)" },
      { name: "Foiliage", details: 'TBD', description: "A modern technique combining balayage and foils for a brighter, more dimensional result. (15min 1st Time consultation required)" },
      { name: "Custom Blonding", details: 'TBD', description: "A personalized journey to your perfect blonde, from icy platinum to golden hues. Consultation required." },
      { name: "Brow Tint", details: '30 min', description: "Enhance the color and definition of your eyebrows for a fuller, more polished look." },
      { name: "Artsy Colors", details: 'TBD', description: "Express yourself with bold, vivid, and fashion-forward colors. Requires a prior consultation. (15min 1st Time consultation required)" }
    ]
  },
  {
    title: 'Styling & Other Services',
    services: [
      { name: "Blow out", details: '30 min', description: "Includes a thorough wash and a professional blow-dry tailored to your desired style." },
      { name: "Style", details: '45 min', description: "Elevate your look with professional styling, including beautiful curls after a blowout." },
      { name: "Casual Updo", details: '1 hr', description: "Effortless and elegant updos perfect for various occasions." },
      { name: "Brow Tint", details: '30 min', description: "Expert brow shaping to perfectly frame your face." },
      // --- ADDED SERVICE ---
      { name: "Deep Conditioning Treatment Olaplex", details: '30 min', description: "Repair broken bonds and rejuvenate your hair from the inside out with this intensive strengthening treatment." }
    ]
  }
];

// 1. Receive the onBookNowClick function as a "prop"
const ServicesSection = ({ onBookNowClick }) => {

  // New code to handle scrolling to the section
  useEffect(() => {
    // Check if the URL hash matches our section's ID
    if (window.location.hash === '#services') {
      const section = document.getElementById('services');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // The empty array ensures this only runs once when the component mounts

  // 2. Create a handler function to call the prop and prevent navigation
  const handleBookNow = (e) => {
    e.preventDefault(); // This stops the link from trying to go anywhere
    
    // Check if the function was passed in before calling it
    if (onBookNowClick) {
      onBookNowClick();
    }
  };

  return (
    <section id="services" className="services-overview-section">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-description">
          From precision cuts to bespoke coloring, experience a curated range of services designed to elevate your style. For detailed pricing and to book your appointment, please visit our online booking page.
        </p>

        <div className="service-categories">
          {serviceCategories.map((category) => (
            <div key={category.title} className="service-category">
              <h3>{category.title}</h3>
              <ul>
                {category.services.map((service) => (
                  <li key={service.name}>
                    <span className="service-name">{service.name}</span>
                    <span className="service-details">{service.details}</span>
                    <p className="service-description">{service.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="button-container" style={{ marginTop: '40px' }}>
          {/* 3. Update the button to use the new onClick handler */}
          <a href="#" onClick={handleBookNow} className="button" title="View all services and book your appointment online">
            View All Services & Book Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;