import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-links" id="leftFooterLinks">
            <p id="footer-name">Selena Castrolopez © 2019</p>
          </div>
          <div className="footer-links" id="rightFooterLinks">
            <ul className="footer-items"> 
              <li className="footer-item">
                <a href="mailto:selenacl22@gmail.com" className="footer-a">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li className="footer-item">
                <a href="https://github.com/selenacl/" className="footer-a">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.linkedin.com/in/selena-castrolopez-b4058b18b" className="footer-a">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;