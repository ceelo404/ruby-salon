import React from 'react';
import videoWebp from '../assets/ruby_hair_salon_video_bg.webp';
import videoMp4 from '../assets/ruby_hair_salon_video_bg.mp4';
import ScrollDownIndicator from './ScrollDownIndicator';

const HeroSection = ({ onBookNowClick }) => {

  const handleBookNow = (e) => {
    e.preventDefault();
    onBookNowClick();
  };
  
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay loop muted playsInline poster={videoWebp} preload="metadata">
        <source src={videoMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-card">
        <div className="card-content">
          <h1 className="visually-hidden">Ruby Hair Salon: Expert Haircuts, Coloring, & Styling in Downtown Decatur, GA</h1>
          <div className="hero-headline-style">Impeccable attention to detail</div>
          <p>With decades of experience, Ruby Hair Salon offers a curated range of services, including precision cuts, bespoke coloring, and transformative styling. We blend cutting-edge techniques with a welcoming atmosphere to deliver a personalized experience that elevates your individual beauty.</p>
          <div>
            <a href="#" onClick={handleBookNow} className="button" title="Schedule your hair appointment at Ruby Hair Salon">Book An Appointment</a>
          </div>
        </div>
      </div>

      <div className="scroll-indicators-wrapper">
        <ScrollDownIndicator 
          href="#find-us-anchor"
          title="Scroll down to locate Ruby Hair Salon"
          text="Locate Us"
        />
      </div>
      
      <div className="visually-hidden">
        <h2>Experience Premier Hair Services at Ruby Hair Salon in Decatur, GA</h2>
        <p>At Ruby Hair Salon, we pride ourselves on <strong>impeccable attention to detail</strong>. Our experienced hairstylists in Decatur, GA, provide precision cuts, vibrant color treatments including balayage and highlights, elegant styling, and smoothing keratin treatments for all hair types. Book your appointment today for the best hair salon experience in Decatur. Find us at 114 W Trinity Pl #10, Decatur, GA 30030. We specialize in women's haircuts, men's haircuts, kids' haircuts, blowouts, updos, and expert brow services.</p>
        <p>Looking for a professional hairdresser in downtown Decatur? Ruby Hair Salon is your destination for personalized hair services, a relaxing atmosphere, and stunning results. Our salon is conveniently located near the AMLI parking garage, offering validated parking for our clients.</p>
        <p>Located conveniently in the heart of downtown Decatur, our salon is a short walk from the Decatur MARTA station. We are proud to be a fixture in the vibrant Decatur community, serving clients from all over the Atlanta area with the highest level of care. Our salon is easily accessible, with validated parking available in the AMLI parking garage, making your visit seamless.</p>
      </div>

    </section>
  );
};

// THIS IS THE CORRECTED LINE
export default HeroSection;
