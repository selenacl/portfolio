import React from 'react';
import './Portfolio.css';
import '../Common/PageContainer.css';

const PortfolioBox = (props) => {
    return (
        <div className="portfolioBox">
            <img src={props.source} />
            <div className="portfolioBio">
                <a href={props.url} className="portfolioLink"><p className="portfolioText" style={{"display": "inline"}}><i><b>{props.name}</b></i> - </p></a>
                <a href={props.github} className="portfolioLink"><p className="portfolioText" style={{"display": "inline"}}><i>{props.github}</i></p></a>
                <p className="portfolioText">{props.description}</p>
                <p className="portfolioText">{props.tech}</p>
            </div>
        </div>
    )
};

export default PortfolioBox;
