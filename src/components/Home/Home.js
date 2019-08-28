import React from 'react';
import './Home.css';
import '../Common/PageContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import portrait from '../../assets/self.png';
const Home = ({id}) => {
    return (
        <div className="pageContainer" id={id}>
            <div id="homeLeftBox">
                <h2 id="homeText1">Hey! I'm</h2>
                <h1 id="homeName">Selena Castrolopez</h1>
                <h3 id="homeText2">I'm a developer and student at the<br />
                    University of Central Florida.
                </h3>
                <div className="homeLinks">
                    <div className="homeLink">
                        <FontAwesomeIcon icon={faEnvelope} className="homeIcon"/>
                        <a href="mailto:selenacl22@gmail.com" className="homeIconText">selenacl22@gmail.com</a>
                    </div>
                    <div className="homeLink">  
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="homeIcon"/>
                        <p className="homeIconText" id="homeIconTextLocation" style={{'display': 'inline'}}>Orlando, Florida</p>
                    </div>
                    <div className="homeLink">
                        <FontAwesomeIcon icon={faGithub} className="homeIcon"/>
                        <a href="https://github.com/selenacl/" className="homeIconText">github.com/selenacl</a>
                    </div>
                    <div className="homeLink">
                        <FontAwesomeIcon icon={faLinkedin} className="homeIcon"/>
                        <a href="https://linkedin.com/in/selena-castrolopez-b4058b18b" className="homeIconText">linkedin.com/selena-castrolopez</a>
                    </div>
                </div>
            </div>
            <div id="homeRightBox">
                <img src={portrait} id="portrait"/>
            </div>
        </div>
    )
};

export default Home;
