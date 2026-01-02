import React from 'react';

const MapSection = () => {
  return (
    <section className="section map-section" id="location">
      <div className="container">
        <div className="section-title reveal">
          <h2>Our Location</h2>
          <p>Visit us at our Moti Nagar branch for world-class healthcare services.</p>
        </div>
        
        <div className="map-container reveal">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.124481400897!2d78.4213558!3d17.4537551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9147d1a7d823%3A0x816c5bd239c4de28!2sSunridge%20Multi-Speciality%20Hospital%2C%20Moti%20Nagar%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1767383603990!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Sunridge Multi-Speciality Hospital Location"
          ></iframe>
        </div>

        {/* <div className="location-details reveal">
          <div className="location-card">
            <h3>Sunridge Multi-Speciality Hospital</h3>
            <p>K/21, 8-3-167, Kalyan Nagar Phase 3 Rd, Phase-3, Pramila Enclave, Kalyan Nagar, Moti Nagar, Hyderabad, Telangana 500114</p>
            <div className="location-actions">
              <a 
                href="https://maps.app.goo.gl/uXpXN6XwG6H2GvXv5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn--primary"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MapSection;
