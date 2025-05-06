import React from 'react';
import Footer from './Footer';


const HeroSection = () => {
  return (
    <section className="bg-primary text-white text-center py-5 hero-section">
      <div className="container">
        <h1 className="display-4 fw-bold">Evans Phone Accessories</h1>
        <p className="lead mb-4">Shop high-quality cases, chargers, and audio gear built for every phone.</p>
        <a href="/" className="btn btn-light btn-lg px-4">Shop Now</a>
      </div>
    </section>
  );
  <Footer />
};

export default HeroSection;
