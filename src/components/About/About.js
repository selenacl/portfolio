import React from 'react';
import './About.css';
import '../Common/PageContainer.css';
import AboutText from './AboutText';
import programming from '../../assets/programming.png';
import donut from '../../assets/donut.png';
import dumbbell from '../../assets/dumbbell.png';
import controller from '../../assets/controller.png';
import beach from '../../assets/beach.png';
import climbing from '../../assets/climbing.png';

const About = ({id}) => {
    return (
        <div className="pageContainer" id={id}>
            <div className="innerContainer">
                <h1 className="pageTitle">ABOUT</h1>
                <div className="aboutBoxes">
                    <div id="aboutLeftBox">
                        <AboutText />
                    </div>
                    <div id="aboutRightBox">
                        <img src={donut} className="aboutIcon"/>
                        <img src={dumbbell} className="aboutIcon"/>
                        <img src={controller} className="aboutIcon"/>
                        <br />
                        <img src={beach} className="aboutIcon"/>
                        <img src={climbing} className="aboutIcon"/>
                        <img src={programming} className="aboutIcon"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
