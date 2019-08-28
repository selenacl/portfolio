import React from 'react';
import './Skills.css';
import '../Common/PageContainer.css'

const SkillsBox = (props) => {
  const skills = props.skills;
  const skillList = skills.map((skill, index) => {
    return <li key={index} className="jobListItem" id="skillsListItem">- {skill}</li>;
  });

  return (
      <div className="skillsBox">
        <div className="innerSkillsBox">
          <h3 className="jobTitle">{props.title}</h3>
          <ul className="jobList" id={(props.title == "Relevant Coursework") ? 'skillsList' : ''}>
            {skillList}
          </ul>
        </div>
      </div>
  )
};

export default SkillsBox;
