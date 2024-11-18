import React from 'react';

const Schedule = () => {
  return (
    <main id="location-embed" className="location-embed-container">
      <hr/>
      <br/><br/>
      <div className="venue-container">
      <h2>Venue</h2>
      <h3>Auditorium, MIET Kot Bhalwal, Jammu, Jammu and Kashmir 181122</h3>
    </div><br/><br/>
      <h3>Our Location</h3>

      <div className="iframe-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.428151746225!2d74.8165221!3d32.8122676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e87ad2533b009%3A0x77069456c55e9f86!2sModel+Institute+of+Engineering+and+Technology+(MIET)%2C+Jammu!5e0!3m2!1sen!2sin!4v1698637423384!5m2!1sen!2sin"
          title="Model Institute of Engineering and Technology"
          width="80%"
          height="500px"
          style={{border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
};

export default Schedule;
