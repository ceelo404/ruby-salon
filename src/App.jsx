import React, { useState, useEffect } from 'react';

// Import all your components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FindUsSection from './components/FindUsSection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import MobileNav from './components/MobileNav';
import StylistSection from './components/StylistSection';
import StylistBio from './components/StylistBio';

// Import your CSS file
import './index.css';

function App() {
  // --- STATE MANAGEMENT ---
  const [isPolicyModalVisible, setPolicyModalVisible] = useState(false);
  const [isMapModalVisible, setMapModalVisible] = useState(false);
  const [isHoursModalVisible, setHoursModalVisible] = useState(false);
  const [isServicesModalVisible, setServicesModalVisible] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isBioModalVisible, setBioModalVisible] = useState(false);

  // --- NEW CODE TO ADD FOR GOOGLE MAPS ---
  useEffect(() => {
    // A function to check the URL hash and open the modal
    const handleHashChange = () => {
      if (window.location.hash === '#services') {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
          setServicesModalVisible(true);
        } else {
          const section = document.getElementById('services');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // --- SIDE EFFECTS ---
  useEffect(() => {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const handleScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isPolicyModalVisible || isMapModalVisible || isHoursModalVisible || isServicesModalVisible || isNavOpen || isBioModalVisible) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  }, [isPolicyModalVisible, isMapModalVisible, isHoursModalVisible, isServicesModalVisible, isNavOpen, isBioModalVisible]);

  // --- SEO DATA (COMPLETE VERSION) ---
  const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ruby Hair Salon",
  "image": "https://ruby-salon.com/ruby-salon-social-share.jpg",
  "url": "https://ruby-salon.com/",
  "telephone": "+14043893114",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "114 W Trinity Pl #10",
    "addressLocality": "Decatur",
    "addressRegion": "GA",
    "postalCode": "30030",
    "addressCountry": "US"
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "10:15", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "11:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "11:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "12:00", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "10:15", "closes": "16:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
  ],
  "hasMap": "https://maps.google.com/?cid=2156501170822616970&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
  "sameAs": [
    "https://www.facebook.com/share/15oGa2Qkam/?mibextid=wwXlfr",
    "https://www.instagram.com/brandyclaussen_?igsh=Y3p5ZGZ0YjcyMDBw"
  ],
  "description": "Ruby Hair Salon offers expert haircuts, bespoke hair coloring, and transformative styling services in Downtown Decatur, GA. Experience precision cuts, vibrant balayage, highlights, and smoothing keratin treatments from our experienced hairstylists in the heart of Decatur. We focus on providing impeccable attention to detail for every client.",
  "service": [
    { "@type": "Service", "name": "Women's Hair Cut", "description": "Precision haircuts for women, tailored to individual style, including wash and blow-dry.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Men's Hair Cut", "description": "Sharp, modern haircuts for men, including consultation and style finish.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Kids Hair Cut", "description": "Expert haircuts for children (10 years and under) in a comfortable environment.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "One Step Color", "description": "Achieve a beautiful, consistent single-process hair color, includes toner.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Highlights", "description": "Transformative highlights for dimension and brightness, including toner.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Blow out", "description": "Professional blow-dry service including thorough wash and styling.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Style", "description": "Professional hair styling for elegant looks, including curls after a blowout.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Casual Updo", "description": "Effortless and elegant updo styling for various occasions.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Toner", "description": "Color refresh or neutralization of unwanted tones for a vibrant hair finish.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Men's Camo", "description": "Subtle gray blending service for a natural, refreshed look for men.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Smoothing Keratin treatment", "description": "Hair treatment to reduce frizz and enhance shine for smoother hair.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Brows", "description": "Expert brow shaping service to perfectly frame your face.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Bang trim", "description": "Complimentary quick bang trimming service between appointments.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },  
    { "@type": "Service", "name": "Balayage", "description": "Achieve a natural, sun-kissed look with seamlessly blended, hand-painted highlights.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Foilyage", "description": "A modern technique combining balayage and foils for a brighter, more dimensional result.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Custom Blonding", "description": "A personalized journey to your perfect blonde, from icy platinum to golden hues. Consultation required.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Brow Tint", "description": "Enhance the color and definition of your eyebrows for a fuller, more polished look.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Artsy Colors", "description": "Express yourself with bold, vivid, and fashion-forward colors. Requires a prior consultation.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Deep Conditioning Treatment Olaplex", "description": "Repair broken bonds and rejuvenate your hair from the inside out with this intensive strengthening treatment.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" },
    { "@type": "Service", "name": "Ombre hair color", "description": "Effortless and elegant ombre styling for various occasions.", "url": "https://book.squareup.com/appointments/uv35is9190nn4a/location/L0GKZSP0E9SDX/services" }

  ]
};

  // --- HANDLER FUNCTIONS ---
  const handleOpenPolicyFromServices = () => {
    setServicesModalVisible(false);
    setPolicyModalVisible(true);
  };

  // ADD THIS NEW FUNCTION
  const handleOpenPolicyFromBio = () => {
    setBioModalVisible(false);    // Close the Bio modal
    setPolicyModalVisible(true);  // Open the Policy modal
  };

  // --- RENDER ---
  return (
<div className="App">
  <title>Ruby Hair Salon - Expert Haircuts, Coloring, & Styling in Downtown Decatur, GA</title>
  <meta name="description" content="Book your perfect look at Ruby Hair Salon in Downtown Decatur, GA! Experience precision haircuts, bespoke coloring, and transformative styling with decades of expertise. Schedule your appointment today!" />
  <meta name="keywords" content="Ruby Hair Salon, hair salon Decatur GA, hair salon Downtown Decatur GA, haircuts Decatur, hair coloring Decatur, hair styling Decatur, best hair salon, professional hair services, Decatur hairstylist, hair treatment Decatur, balayage Decatur, highlights Decatur, men's haircuts Decatur, kids haircuts Decatur, keratin treatment Decatur, blowouts Decatur, updo Decatur, brow shaping Decatur" />
  <link rel="canonical" href="https://ruby-salon.com/" />
  <meta property="og:title" content="Ruby Hair Salon - Expert Haircuts, Coloring, & Styling in Downtown Decatur, GA" />
  <meta property="og:description" content="Experience precision haircuts, bespoke coloring, and transformative styling at Ruby Hair Salon in Downtown Decatur, GA. Decades of experience for your perfect look. Book your appointment today!" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ruby-salon.com/" />
  <meta property="og:image" content="https://ruby-salon.com/ruby-salon-social-share.jpg" />
  <meta property="og:image:alt" content="Ruby Hair Salon storefront with logo" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ruby Hair Salon - Expert Haircuts, Coloring, & Styling in Downtown Decatur, GA" />
  <meta name="twitter:description" content="Experience precision haircuts, bespoke coloring, and transformative styling at Ruby Hair Salon in Downtown Decatur, GA. Decades of experience for your perfect look. Book your appointment today!" />
  <meta name="twitter:image" content="https://ruby-salon.com/ruby-salon-social-share.jpg" />
  <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <Header 
        onNavToggle={() => setNavOpen(true)} 
        onBookNowClick={() => setPolicyModalVisible(true)}
      />
      
      <MobileNav 
        isOpen={isNavOpen}
        onClose={() => setNavOpen(false)}
        onBookNowClick={() => setPolicyModalVisible(true)}
        onServicesClick={() => setServicesModalVisible(true)}
        onFindUsClick={() => setMapModalVisible(true)}
        onHoursClick={() => setHoursModalVisible(true)}
  onStylistBioClick={() => setBioModalVisible(true)}
      />
      
      <main>
        <HeroSection onBookNowClick={() => setPolicyModalVisible(true)} />
        <ServicesSection onBookNowClick={() => setPolicyModalVisible(true)} />
        <StylistSection />
        <Gallery /> {/* <-- 2. PLACE THE COMPONENT */}
        <FindUsSection />
      </main>
      
      <Footer 
        onFindUsClick={() => setMapModalVisible(true)}
        onHoursClick={() => setHoursModalVisible(true)}
      />

      <Modal isVisible={isPolicyModalVisible} onClose={() => setPolicyModalVisible(false)}>
        <h2>Cancellation & Adjustments Policy</h2>
        <p><strong>Cancellation Policy:</strong> Cancellations made less than 24 hours prior to the appointment may result in a cancellation fee of 50% of the service price.</p>
        <p><strong>Adjustments Policy:</strong> At Ruby Hair Salon, we want you to love your look. If you need an adjustment within 10 days of your service, please reach out to book a complimentary adjustment.</p>
        <div className="button-container">
          <a href="https://app.squareup.com/appointments/buyer/widget/uv35is9190nn4a/L0GKZSP0E9SDX" className="button" title="Agree to policy and book appointment">Agree & Book</a>
        </div>
      </Modal>

      <Modal isVisible={isMapModalVisible} onClose={() => setMapModalVisible(false)}>
        <h2>Find Us</h2>
        <p className="modal-parking-info">Validated 2Hr Parking at the AMLI parking garage 122 W Trinity Pl.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13265.875770806726!2d-84.29727690740961!3d33.77438646705779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f507b27fa45657%3A0x1ded6e63a498978a!2sRuby%20Hair%20Salon!5e0!3m2!1sen!2sus!4v1753991876365!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map of Ruby Hair Salon location in Decatur, GA"></iframe>
      </Modal>

      <Modal isVisible={isHoursModalVisible} onClose={() => setHoursModalVisible(false)}>
        <h2>Our Hours</h2>
        <div className="hours-content" style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'left' }}>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Monday:</span> <span>10:15 AM – 5:00 PM</span></p>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Tuesday:</span> <span>11:00 AM – 5:00 PM</span></p>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Wednesday:</span> <span>11:00 AM – 5:00 PM</span></p>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Thursday:</span> <span>12:00 PM – 7:00 PM</span></p>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Friday:</span> <span>10:15 AM – 4:00 PM</span></p>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Saturday:</span> <span>10:00 AM – 4:00 PM</span></p>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Sunday:</span> <span>Closed</span></p>
        </div>
      </Modal>
      
      <Modal isVisible={isServicesModalVisible} onClose={() => setServicesModalVisible(false)}>
        <ServicesSection onBookNowClick={handleOpenPolicyFromServices} />
      </Modal>
      <Modal isVisible={isBioModalVisible} onClose={() => setBioModalVisible(false)}>
        <StylistBio onBookNowClick={handleOpenPolicyFromBio} />
      </Modal>
    </div>
  );
}

export default App;