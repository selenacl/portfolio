import React from 'react';
import './Portfolio.css';
import '../Common/PageContainer.css';
import PortfolioBox from './PortfolioBox';
import snacked from '../../assets/snacked.jpg';
import sherlock from '../../assets/sherlock1.jpg';
import signups from '../../assets/signups.png';
import treeme from '../../assets/treeme.jpg';
import cache from '../../assets/cache.png';
import eventIt from '../../assets/event-it.jpg';

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
                        description="Web app used to create and sign up for volunteering opportunities"
                        tech="Tech Used: React, Redux, Bootstrap, Node, Express, Mongodb"
                    />
                    <PortfolioBox 
                        url="https://getsnacked.herokuapp.com"
                        source={snacked}
                        name="Snacked"
                        github="https://github.com/selenacl/snacked"
                        description="Landing page for a faux baking subscription service company"
                        tech="Tech Used: HTML, CSS/SASS, Adobe XD"
                    />
                    <PortfolioBox 
                        source={sherlock}
                        name="Sherlock"
                        github="https://github.com/BrendonLyra/Sherlock"
                        description="Senior Design Project - Web app to study choices made in interactive media using various biometric scanners"
                        tech="Tech Used: React, Redux, Bootstrap, Node, Express, Mongodb, OWL"
                    />
                </div>
                <div className="portfolioLowerBox">
                    <PortfolioBox 
                        source={eventIt}
                        name="Event It"
                        github="https://github.com/selenacl/event-site"
                        description="Web app for students to sign up and view college events and student organizations"
                        tech="Tech Used: React, Node, MySQL, AWS, Bootstrap"
                    />
                    <PortfolioBox 
                        source={cache}
                        name="Cache Simulator"
                        description="Simulator created to test the differences in caches with different associations, write policies, and replacement policies"
                        tech="Tech Used: C Programming Language" />
                    <PortfolioBox 
                        url="treeme.herokuapp.com"
                        source={treeme}
                        name="Tree.me"
                        github="https://github.com/selenacl/treeme"
                        description="A site to search through a subset of trees by name and view more details about them"
                        tech="Tech Used: React, CSS/SASS, Adobe XD"
                    />
                </div>

            </div>
        </div>
    )
};

export default Portfolio;
