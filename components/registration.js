import React from 'react';
import one from './images/1.png';

const WorkshopRegistration = () => {
  return (
    <main id='register' className="registration_main" style={{ backgroundColor: '(0,0,0,0.073)' }}>
      <br /><br /> <br/>{/* Adds 2 line breaks on top */}
      <div className="content_container">
        <div className="registration_section">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Registration</h1>
          <p style={{ fontSize: '1.15rem' }}>
            We cordially invite undergraduate and postgraduate students from Computer Science and Mathematics to apply for participation in the workshop.
          </p>
          <br />
          <a href="https://www.google.com/search?q=google&rlz=1C1CHBF_en__1051__1051&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIYCAEQLhhDGIMBGMcBGLEDGNEDGIAEGIoFMgwIAhAjGCcYgAQYigUyDAgDECMYJxiABBiKBTIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQBRhA0gEIMTQ1NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" style={{ textDecoration: "none" }}>
            <button className="register-button">
              Register Now
            </button>
          </a>
          <p style={{ fontSize: '1.05rem', marginTop: '1rem' }}>» Last Day to apply is 28th November 2024.</p>
          <p style={{ fontSize: '1.05rem' }}>» Registration fee is Rs. 200/- + GST</p>
        </div>

        <div className="image_section">
          <img
            src={one}
            alt="Register Now"
            className="registration_image"
          />
        </div>
      </div>
      <br/><br/>
      <div style={{
        width: '100%',
        height: '5px',
        backgroundColor: 'white',
        marginTop: '1rem'
      }}></div>
    </main>
  );
};

export default WorkshopRegistration;
