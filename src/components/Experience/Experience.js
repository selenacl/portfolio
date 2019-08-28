import React from 'react';
import './Experience.css';
import '../Common/PageContainer.css'

const Experience = ({id}) => {
    return (
        <div className="pageContainer" id={id}>
            <div className="innerContainer">
            <div>
                <h1 className="pageTitle" style={{"display": "inline"}}>Experience</h1>
                <button className="resumeBtn"><a href="Selena Castrolopez - Resume.pdf" download id="resumeLink">DOWLOAD RESUME</a></button>
            </div>
            <div className="experienceBox">
                <div className="innerJobBox">
                    <h3 className="jobTitle">Summer Technology Analyst - </h3><h3 className="jobTitle" id="citi"><i><b>Citi</b></i></h3>
                    <h4 className="jobDate">June 2019 - August 2019</h4>
                    <ul className="jobList">
                        <li className="jobListItem">- Worked in an agile and global team to develop a dashboard using the Jira API to view, edit, and add team specific details to jira tickets.</li>
                        <li className="jobListItem">- Greatly reduced application's load times by scheduling a sync from Jira to the team's Oracle database.</li>
                        <li className="jobListItem">- Refactored styling to be mobile responsive.</li>
                        <li className="jobListItem">- Researched and evaluated project architecture decisions to ensure reusable and efficient code.</li>
                        <li className="jobListItem">- Technologies used include AngularJS, Bootstrap, LESS, Spring Boot, Spring Security, Hibernate, and JPA.</li>
                    </ul>
                </div>
            </div>
            <div className="experienceBox">
                <div className="innerJobBox">
                    <h3 className="jobTitle">Electronics Consultant - </h3><h3 className="jobTitle" id="target"><i><b>Target</b></i></h3>
                    <h4 className="jobDate">February 2017 - Februrary 2019</h4>
                    <ul className="jobList">
                        <li className="jobListItem">- Assisted with merchandising, setting visual displays, and keeping inventory of products.</li>
                        <li className="jobListItem">- Provided customers with expert product knowledge and quick problem solving.</li>
                        <li className="jobListItem">- Trained new team members to become familiar with roles and equipment.</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Experience;
