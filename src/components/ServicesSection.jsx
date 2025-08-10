import React, { useEffect } from 'react';
import '../index.css';  // Assuming you save the CSS in this file

// Define service data as an array of objects, now balanced across 4 categories
const serviceCategories = [
  {
    title: 'Haircuts',
    icon: (
      // SVG for Haircuts
      <svg width="48" height="48" viewBox="0 0 1024 1024" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M539.2 583.2c-3.2 0-6.4-0.8-8.8-3.2l-108.8-75.2c-4-3.2-6.4-7.2-7.2-12l-24.8-456c-0.8-8 2.4-16.8 8-22.4 5.6-6.4 13.6-9.6 21.6-10.4l14.4-0.8c15.2 0 28.8 11.2 31.2 26.4l89.6 534.4c0.8 6.4-1.6 12.8-7.2 16-2.4 2.4-5.6 3.2-8 3.2zM445.6 484l71.2 48.8L433.6 36c-2.4 0-10.4 0.8-12 0.8l24 447.2zM444.8 645.6c-2.4 0-5.6-0.8-8-2.4-3.2-2.4-6.4-4-9.6-7.2-6.4-5.6-7.2-16-1.6-22.4 5.6-6.4 15.2-8 22.4-2.4 1.6 1.6 3.2 3.2 5.6 4 7.2 4.8 10.4 14.4 5.6 21.6-4 5.6-9.6 8.8-14.4 8.8z" />
        <path d="M436.8 640c-4 0-7.2-1.6-10.4-4-6.4-5.6-7.2-16-1.6-22.4 5.6-6.4 16-7.2 22.4-1.6 6.4 5.6 7.2 16 1.6 22.4-2.4 4-7.2 5.6-12 5.6z" />
        <path d="M460.8 652h-3.2c-8-1.6-15.2-4-21.6-8-7.2-4.8-10.4-14.4-5.6-21.6 4.8-7.2 14.4-10.4 21.6-5.6 3.2 2.4 7.2 3.2 11.2 4 8.8 1.6 14.4 9.6 12.8 18.4-0.8 7.2-7.2 12.8-15.2 12.8zM745.6 794.4c-9.6 0-18.4-2.4-25.6-8-10.4-7.2-16.8-17.6-19.2-28.8-2.4-12 0.8-24 7.2-33.6 8.8-12 22.4-19.2 37.6-19.2 9.6 0 18.4 2.4 25.6 8 10.4 7.2 16.8 17.6 19.2 28.8 2.4 12-0.8 24-7.2 33.6-8.8 11.2-23.2 19.2-37.6 19.2z m0-75.2c-9.6 0-19.2 4.8-24 12.8-4.8 6.4-6.4 14.4-4.8 21.6 1.6 8 5.6 14.4 12 19.2 4.8 3.2 10.4 5.6 16.8 5.6 9.6 0 19.2-4.8 24-12.8 4.8-6.4 6.4-14.4 4.8-21.6-1.6-8-5.6-14.4-12-19.2-4.8-3.2-11.2-5.6-16.8-5.6z" />
        <path d="M745.6 875.2c-26.4 0-51.2-8-72.8-22.4-44-30.4-64-84.8-51.2-136l-89.6-64h-21.6c-8.8 0-16-7.2-16-16s7.2-16 16-16h26.4c3.2 0 6.4 0.8 9.6 3.2l102.4 74.4c5.6 4 8 12 5.6 18.4-14.4 40 0 85.6 35.2 110.4 16 11.2 35.2 16.8 54.4 16.8 31.2 0 60.8-15.2 78.4-40.8 2.4-3.2 4.8-7.2 6.4-11.2 3.2-6.4 11.2-10.4 18.4-8 40.8 10.4 86.4 6.4 128.8-12.8 0.8 0 0.8-0.8 1.6-0.8 8-4 11.2-13.6 7.2-21.6-4-8-14.4-12.8-23.2-8.8-23.2 10.4-46.4 15.2-69.6 15.2-19.2 0-33.6-3.2-43.2-6.4-5.6-1.6-10.4-7.2-11.2-12.8-4-26.4-17.6-48.8-40-64-16-11.2-35.2-16.8-54.4-16.8-21.6 0-42.4 7.2-59.2 20.8-5.6 4-12.8 4.8-19.2 0.8L42.4 245.6 36 256l411.2 356c6.4 5.6 7.2 16 1.6 22.4-5.6 6.4-16 7.2-22.4 1.6L15.2 280c-12-10.4-14.4-28.8-4.8-41.6l7.2-10.4c5.6-8.8 15.2-13.6 25.6-13.6 6.4 0 12.8 1.6 17.6 5.6l615.2 423.2c20.8-12.8 44.8-20 69.6-20 25.6 0 51.2 8 72.8 22.4 26.4 18.4 44.8 44.8 51.2 75.2 6.4 1.6 15.2 2.4 24.8 2.4 18.4 0 37.6-4 56.8-12.8 6.4-2.4 12.8-4 20-4 19.2 0 36.8 11.2 44.8 28.8 10.4 23.2 1.6 50.4-20.8 62.4l-4.8 2.4c-44.8 20-92.8 25.6-137.6 16.8-0.8 1.6-1.6 3.2-3.2 4-23.2 34.4-62.4 54.4-104 54.4z" />
        <path d="M511.2 652.8h-40.8c-8.8 0-16-7.2-16-16s7.2-16 16-16h40.8c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
        <path d="M484 1020c-68 0-124-52.8-127.2-120-3.2-52 25.6-99.2 72.8-120.8l-8-154.4c-0.8-8.8 6.4-16 15.2-16.8 8.8-0.8 16 6.4 16.8 15.2l8.8 165.6c0 7.2-4 13.6-10.4 16-40 14.4-64.8 52-62.4 93.6 3.2 52 47.2 92 100.8 89.6 25.6-1.6 48.8-12.8 66.4-31.2 16.8-19.2 25.6-43.2 24-68-2.4-43.2-33.6-79.2-76-88-7.2-1.6-12-7.2-12.8-14.4l-9.6-125.6c0-3.2 0.8-6.4 2.4-9.6l13.6-22.4c4.8-7.2 14.4-9.6 22.4-5.6 7.2 4.8 9.6 14.4 5.6 22.4L515.2 664l8 108.8c50.4 15.2 86.4 60.8 89.6 114.4 1.6 33.6-9.6 66.4-32.8 91.2-22.4 24.8-54.4 40-88 41.6h-8z" />
        <path d="M511.2 652.8h-40.8c-8.8 0-16-7.2-16-16s7.2-16 16-16h40.8c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
        <path d="M460.8 652h-3.2c-8-1.6-15.2-4-21.6-8-7.2-4.8-10.4-14.4-5.6-21.6 4.8-7.2 14.4-10.4 21.6-5.6 3.2 2.4 7.2 3.2 11.2 4 8.8 1.6 14.4 9.6 12.8 18.4-0.8 7.2-7.2 12.8-15.2 12.8z" />
        <path d="M444.8 645.6c-2.4 0-5.6-0.8-8-2.4-3.2-2.4-6.4-4-9.6-7.2-6.4-5.6-7.2-16-1.6-22.4 5.6-6.4 15.2-8 22.4-2.4 1.6 1.6 4 3.2 5.6 4 7.2 4.8 10.4 14.4 5.6 21.6-4 5.6-9.6 8.8-14.4 8.8z" />
        <path d="M436.8 640c-4 0-7.2-1.6-10.4-4-6.4-5.6-7.2-16-1.6-22.4 5.6-6.4 16-7.2 22.4-1.6 6.4 5.6 7.2 16 1.6 22.4-2.4 4-7.2 5.6-12 5.6zM484 939.2c-24.8 0-44.8-19.2-46.4-44-0.8-12 3.2-24 12-33.6 8-8.8 20-14.4 32-15.2 25.6-1.6 47.2 18.4 48.8 44 0.8 12-3.2 24-12 33.6-8 8.8-20 14.4-32 15.2h-2.4z m0-76h-1.6c-8 0.8-16 4-20.8 10.4-5.6 6.4-8 13.6-8 21.6 0.8 16.8 15.2 29.6 32 28.8 8-0.8 16-4 20.8-10.4 5.6-6.4 8-13.6 8-21.6-0.8-16-13.6-28.8-30.4-28.8z" />
        <path d="M470.4 652.8c-4 0-8 0-12-0.8-8.8-1.6-14.4-9.6-12.8-18.4 1.6-8.8 9.6-14.4 18.4-12.8 1.6 0 4 0.8 6.4 0.8 8.8 0 16 7.2 16 16 0 8-7.2 15.2-16 15.2zM465.6 585.6c-1.6 0-3.2-0.8-4.8-1.6L448 573.6c-3.2-2.4-4-8-1.6-11.2 2.4-3.2 8-4 11.2-1.6l12.8 10.4c3.2 2.4 4 8 1.6 11.2-1.6 2.4-4 3.2-6.4 3.2z" />
      </svg>
    ),
    services: [
      { name: "Women's Hair Cut", details: '45 min', description: "Experience a precision haircut tailored to your unique style. Includes a thorough wash, relaxing scalp massage, and professional blow-dry." },
      { name: "Men's Hair Cut", details: '30 min', description: "Sharp and modern cuts designed for men, including consultation and style finish." },
      { name: "Kids Hair Cut (10yr under)", details: '30 min', description: "Expert cuts for our younger clients, ensuring a comfortable and fun experience." },
      { name: "Bang trim", details: '15 min', description: "A complimentary quick trim to keep your bangs looking fresh between appointments." }
    ]
  },
  {
    title: 'Coloring',
    icon: (
      // SVG for Coloring
      <svg width="48" height="48" viewBox="0 0 1024 1024" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 1020c-6.4 0-12.8-2.4-16.8-7.2-8.8-8.8-9.6-24-0.8-33.6l471.2-520L493.6 224c0-4 1.6-8 4.8-10.4l42.4-42.4c6.4-6.4 16-6.4 22.4 0l289.6 289.6c6.4 6.4 6.4 16 0 22.4l-42.4 42.4c-2.4 3.2-6.4 4.8-10.4 4.8l-235.2 12-520 471.2c-4.8 4-10.4 6.4-16.8 6.4z m484.8-555.2c0 4-0.8 8-4 12l-369.6 408 408-369.6c3.2-3.2 8-4.8 12-4l232-12 26.4-26.4-266.4-267.2-26.4 26.4-12 232.8z" />
        <path d="M551.2 199.2c-4 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4L703.2 8.8c6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4L562.4 194.4c-2.4 3.2-7.2 4.8-11.2 4.8zM588 235.2c-4 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4L740 44.8c6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4L599.2 230.4c-3.2 3.2-7.2 4.8-11.2 4.8zM624 272c-4 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4L776 80.8c6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4L635.2 267.2c-3.2 3.2-7.2 4.8-11.2 4.8zM660 308c-4 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4l163.2-163.2c6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4L671.2 303.2c-3.2 3.2-7.2 4.8-11.2 4.8zM696 344c-4 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4L848 153.6c6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4L707.2 339.2c-3.2 3.2-7.2 4.8-11.2 4.8zM732 380c-4 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4l163.2-163.2c6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4L743.2 375.2c-2.4 3.2-7.2 4.8-11.2 4.8zM768 416c-4 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4L920 225.6c6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4L780 411.2c-3.2 3.2-7.2 4.8-12 4.8zM804.8 452c-4 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4l163.2-163.2c6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4L816 448c-3.2 3.2-7.2 4-11.2 4zM840.8 488.8c-4 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4l163.2-163.2c6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4l-163.2 163.2c-3.2 3.2-7.2 4.8-11.2 4.8z" />
        <path d="M687.2 458.4c-2.4 0-4-0.8-5.6-2.4L560 333.6c-3.2-3.2-3.2-8 0-11.2 3.2-3.2 8-3.2 11.2 0l121.6 122.4c3.2 3.2 3.2 8 0 11.2-1.6 1.6-3.2 2.4-5.6 2.4z" />
      </svg>
    ),
    services: [
      { name: "One Step Color", details: '1 hr 45 min', description: "Achieve a beautiful, consistent single-process color. Includes toner. (15min 1st Time consultation required)" },
      { name: "Highlights", details: '2 hr', description: "Transform your look with expertly applied highlights, adding dimension and brightness. Includes toner. (15min 1st Time consultation required)" },
      { name: "Balayage", details: 'TBD', description: "Achieve a natural, sun-kissed look with seamlessly blended, hand-painted highlights. (15min 1st Time consultation required)" },
      { name: "Foiliage", details: 'TBD', description: "A modern technique combining balayage and foils for a brighter, more dimensional result. (15min 1st Time consultation required)" },
      { name: "Custom Blonding", details: 'TBD', description: "A personalized journey to your perfect blonde, from icy platinum to golden hues. Consultation required." },
      { name: "Artsy Colors", details: 'TBD', description: "Express yourself with bold, vivid, and fashion-forward colors. Requires a prior consultation. (15min 1st Time consultation required)" },
      { name: "Ombre hair color", details: 'TBD', description: "Effortless and elegant ombre styling for various occasions." }
    ]
  },
  {
    title: 'Treatments & Brows',
    icon: (
      // SVG for Treatments
      <svg width="48" height="48" viewBox="0 0 1024 1024" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M669.6 1020H354.4c-34.4 0-63.2-24-63.2-52.8V448c0-67.2 47.2-128 121.6-158.4v-38.4c0-8.8 7.2-16 16-16h165.6c8.8 0 16 7.2 16 16v38.4c74.4 29.6 121.6 91.2 121.6 158.4v519.2c0 28.8-28 52.8-62.4 52.8z m-224-752.8v33.6c0 7.2-4 12.8-10.4 15.2C368 339.2 324 391.2 324 448v519.2c0 11.2 14.4 20.8 31.2 20.8h314.4c16.8 0 31.2-9.6 31.2-20.8V448c0-56.8-43.2-108-111.2-132-6.4-2.4-10.4-8-10.4-15.2v-33.6H445.6z" />
        <path d="M626.4 267.2H397.6c-8.8 0-16-7.2-16-16V141.6c0-8.8 7.2-16 16-16h228c8.8 0 16 7.2 16 16v109.6c0.8 8.8-6.4 16-15.2 16z m-212.8-32h196v-77.6H413.6v77.6z" />
        <path d="M580 157.6h-136c-8.8 0-16-7.2-16-16V20c0-8.8 7.2-16 16-16h136.8c8.8 0 16 7.2 16 16v121.6c-0.8 8.8-8 16-16.8 16z m-120-32h104.8V36H460v89.6zM512 812.8c-67.2 0-121.6-72.8-121.6-162.4S444.8 488 512 488s121.6 72.8 121.6 162.4-54.4 162.4-121.6 162.4zM512 504c-58.4 0-105.6 65.6-105.6 146.4 0 80.8 47.2 146.4 105.6 146.4s105.6-65.6 105.6-146.4C617.6 569.6 570.4 504 512 504z" />
        <path d="M512 110.4c-16 0-29.6-13.6-29.6-29.6S496 51.2 512 51.2s29.6 13.6 29.6 29.6-13.6 29.6-29.6 29.6z m0-43.2c-7.2 0-13.6 6.4-13.6 13.6s6.4 13.6 13.6 13.6 13.6-6.4 13.6-13.6-6.4-13.6-13.6-13.6z" />
      </svg>
    ),
    services: [
      { name: "Toner", details: '1 hr', description: "Refresh your existing color or neutralize unwanted tones for a vibrant finish." },
      { name: "Smoothing Keratin treatment", details: '1 hr', description: "Reduce frizz and enhance shine with our deeply conditioning keratin treatment." },
      { name: "Deep Conditioning Treatment Olaplex", details: '30 min', description: "Repair broken bonds and rejuvenate your hair from the inside out with this intensive strengthening treatment." },
      { name: "Hair glossing", details: 'TBD', description: "The perfect way to add brilliant shine and life back to your hair." },
      { name: "Hair hydration treatments", details: 'TBD', description: "Hair treatment to reduce frizz and enhance shine for smoother hair." },
      { name: "Brow Tint", details: '30 min', description: "Enhance the color and definition of your eyebrows for a fuller, more polished look." }
    ]
  },
  {
    title: 'Styling & Other Services',
    icon: (
      // SVG for Styling & Other
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
        <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
        <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
      </svg>
    ),
    services: [
      { name: "Blow out", details: '30 min', description: "Includes a thorough wash and a professional blow-dry tailored to your desired style." },
      { name: "Style", details: '45 min', description: "Elevate your look with professional styling, including beautiful curls after a blowout." },
      { name: "Casual Updo", details: '1 hr', description: "Effortless and elegant updos perfect for various occasions." },
      { name: "Men's Camo", details: '15 min', description: "Subtle gray blending for a natural, refreshed look for men." }
    ]
  }
];

const ServicesSection = ({ onBookNowClick }) => {

  // This new code handles scrolling to the section if linked directly
  useEffect(() => {
    if (window.location.hash === '#services') {
      const section = document.getElementById('services');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleBookNow = (e) => {
    e.preventDefault();
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
              <div className="icon-container">
                {category.icon}
              </div>
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
          <a href="#" onClick={handleBookNow} className="button" title="View all services and book your appointment online">
            View All Services & Book Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;