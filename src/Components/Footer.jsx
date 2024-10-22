import React from 'react';
import '../Styles/Footer.css'; // Importing Footer CSS

const Footer = () => {
  return (
    <footer className="container-fluid alert alert-success">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 mb-4">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima voluptatem eum enim. Esse quasi deleniti voluptates, architecto enim harum aliquam, aspernatur debitis dolores recusandae sequi, quaerat iusto dicta impedit animi.
          </p>
        </div>
  
        <div class="col-12 col-md-2 mb-4">
          <h3>Quick Links</h3>
          <ul class="list-unstyled">
            <li><a href="/services#service1">PNR Enquiry</a></li>
            <li><a href="/services#service2">Rail Status</a></li>
            <li><a href="/services#service3">Bandh-Ka-Rail</a></li>
            <li><a href="/services#service4">Contact</a></li>
          </ul>
        </div>
  
        <div class="col-12 col-md-3 mb-4">
          <h3>Contact</h3>
          <p><strong>Address:</strong> Mexico, USA</p>
          <p><strong>Email:</strong> contact@metrorail.com</p>
          <p><strong>Phone:</strong> +111233333</p>
        </div>
  
        <div class="col-12 col-md-3 mb-4">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> <br />
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> <br />
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> <br />
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
  
      <div class="footer-bottom text-center mt-4">
        <p>&copy; 2024 Metro Rail. All Rights Reserved.</p>
      </div>
    </div>
  </footer>

  );
};

export default Footer;
