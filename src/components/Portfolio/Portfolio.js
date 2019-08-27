import React from 'react';
import './Portfolio.css';
import '../Common/PageContainer.css';
import PortfolioBox from './PortfolioBox';
import keepu from '../../assets/keepu.png';
import sherlock from '../../assets/sherlock.png';
import signups from '../../assets/signups.png';
import kimmyd from '../../assets/kimmyd.png';
import cache from '../../assets/cache.png';
import contact from '../../assets/contact.png';

const Portfolio = ({id}) => {
    return (
        <div className="pageContainer" id={id}>
            <div className="innerContainer" id="innerPortfolio">
                <h1 className="pageTitle" id="portfolioTitle">Portfolio</h1>
                <div className="portfolioUpperBox">
                    <PortfolioBox 
                        url=""
                        source={signups}
                        name="Simple Signups"
                        github="https://github.com/selenacl/volunteer-site"
                        description="Web app used to create and sign up for events"
                        tech="Tech Used: React, Redux, Bootstrap, Node, Express, Mongodb, AWS"
                    />
                    <PortfolioBox 
                        url="keepuapp.herokuapp.com"
                        source={keepu}
                        name="Keepu"
                        github="https://github.com/EA-Cortes/COP4331-large-project"
                        description="Web app for non profits to organize materials needed"
                        tech="Tech Used: React, Bootstrap, Node, Express, Mongodb, Heroku"
                    />
                    <PortfolioBox 
                        source={sherlock}
                        name="Sherlock"
                        github="https://github.com/BrendonLyra/Sherlock"
                        description="Senior Design Project (in progress) - Web app to study choices made in interactive media using various biometric scanners"
                        tech="Tech Used: React, Redux, Bootstrap, Node, Express, Mongodb, AWS, OWL"
                    />
                </div>
                <div className="portfolioLowerBox">
                    <PortfolioBox 
                        source={contact}
                        name="Contact Web App"
                        description="Web app to add and view contacts"
                        tech="Tech Used: HTML/CSS/JS, ASP.NET, MySQL, Azure"
                    />
                    <PortfolioBox 
                        source={cache}
                        name="Cache Simulator"
                        description="Simulator created to test the differences in caches with different associations, write policies, and replacement policies."
                        tech="Tech Used: C Programming Language" />
                    <PortfolioBox 
                        source={kimmyd}
                        name="Kimmy D's Diner"
                        github="https://github.com/juliansweatt/kimmyd-diner"
                        description="Landing page for a family owned diner"
                        tech="Tech Used: Angular"
                    />
                </div>

            </div>
        </div>
    )
};

export default Portfolio;
