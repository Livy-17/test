import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer--container'>
      <div className='Footer--upper'>
        <div>
          <h3>Shopping with MUJI</h3>
          <p>Student Discount</p>
          <p>Our Newest Products</p>
          <p>Size Chart</p>
          <p>Store Locator</p>
          <p>Interior Advisor Service</p>
        </div>
        <div>
          <h3>Help</h3>
          <p>Support Pages</p>
          <p>Contact us</p>
          <p>Data Access Request</p>
          <p>Unsubscribe from MUJI Mail</p>
          <p>Careers at MUJI</p>
        </div>
        <div>
          <h3>About US</h3>
          <p>About Us</p>
          <p>Press</p>
          <p>Privacy Policy</p>
          <p>Events Policy</p>
          <p>Terms &amd; Conditions</p>
          <p>Data Transfer Agreement</p>
          <p>Cookies Policy</p>
          <p>Modern Slavery Statement</p>
          <p>Tax Strategy</p>
        </div>
      </div>
      <div className='Footer--lower'>
        <p>© Miuji. 2022</p>
      </div>
    </div>
  )
};

export default Footer;