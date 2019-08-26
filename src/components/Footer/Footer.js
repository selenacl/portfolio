import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-links" id="leftFooterLinks">
            <p>Selena Castrolopez</p>
          </div>
          <div className="footer-links" id="rightFooterLinks">
            <ul className="footer-items"> 
              <li className="footer-item">selenacl22@gmail.com</li>
              <li className="footer-item">0</li>
              <li className="footer-item">0</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;