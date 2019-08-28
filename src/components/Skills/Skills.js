import React from 'react';
import './Skills.css';
import '../Common/PageContainer.css'
import SkillsBox from './SkillsBox';
const Skills = ({id}) => {
    return (
        <div className="pageContainer" id={id}>
            <div className="innerContainer">
                <h1 className="pageTitle" id="skillsTitle">Skills</h1>
                <div className="skillsBoxes">
                    <SkillsBox 
                        title="Languages"
                        skills={["Java", "C", "Javascript", "HTML/CSS", "SQL"]}
                    />
                    <SkillsBox 
                        title="Frameworks"
                        skills={["React", "AngularJS", "Node/Express", "Spring Boot", "Bootstrap"]}
                    />
                    <SkillsBox 
                        title="Tools"
                        skills={["Git", "MongoDB", "Intellij"]}
                    />
                </div>
                <div style={{"display": "flex"}}>
                    <SkillsBox 
                            title="Relevant Coursework"
                            skills={
                                [   "Computer Science I/II (Algorithms and Data Structures",
                                    "Databases", 
                                    "Managing IT Integration (Project Management)", 
                                    "Senior Design I/II (Capstone courses)",
                                    "Matrix and Linear Algrebra",
                                    "Computer Architecture",
                                    "Robot Vision",
                                    "Processes of Object Oriented Software Design (Software Engineering)"]}
                    />
                </div>
            </div>
        </div>
    )
};

export default Skills;
