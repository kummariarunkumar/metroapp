import React from 'react';
import '../Styles/Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Metro Rail!</h1>
          <p>We provide amazing services to help Every citizen.</p>
          <a href="/services" className="btn hero-btn">Learn More</a>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h2>Professional Services</h2>
          <p>Our team offers a wide range of professional services tailored to your needs.</p>
        </div>
        <div className="feature">
          <h2>Customer Support</h2>
          <p>We offer 24/7 customer support to assist you with any inquiries or issues.</p>
        </div>
        <div className="feature">
          <h2>Trusted by Clients</h2>
          <p>We have a proven track record of success and are trusted by our clients.</p>
        </div>
      </section>
    </div>
    
  );
};

export default Home;
