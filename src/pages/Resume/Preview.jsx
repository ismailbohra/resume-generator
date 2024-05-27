import React from "react";
import { useSelector } from "react-redux";
import "./preview.scss";
import parse from "html-react-parser";

const Preview = ({ resume }) => {
  // Get resume data from Redux store

  return (
    <div className="resumepreview">
      <div className="personal-details">
        <div className="name">
          {resume.personalDetails.firstName} {resume.personalDetails.lastName}
        </div>
        <div className="title">{resume.personalDetails.title}</div>
        <span>{resume.personalDetails.email} | </span>
        <span>{resume.personalDetails.phone} | </span>
        <span>{resume.personalDetails.address}</span>
        <div className="links">
          {resume.personalDetails.github && (
            <span>
              <a href={resume.personalDetails.github}>GitHub</a>
            </span>
          )}
          {resume.personalDetails.github && resume.personalDetails.linkedin && (
            <>|</>
          )}
          {resume.personalDetails.linkedin && (
            <span>
              <a href={resume.personalDetails.linkedin}>LinkedIn</a>
            </span>
          )}
        </div>
      </div>

      {resume.personalDetails.summary && (
        <>
          <div className="heading">Summary</div>
          <div className="summary">{parse(resume.personalDetails.summary)}</div>
        </>
      )}

      {resume.workExperience.length > 0 && (
        <>
          <div className="heading">Work Experience</div>
          <div className="workexperience">
            {resume.workExperience.map((e, index) => (
              <div key={index}>
                <div className="company">{e.company}</div>
                <div className="role">{e.role}</div>
                <div className="address">
                  {e.location} | {e.startDate} -{" "}
                  {e.present ? "Present" : e.endDate}
                </div>
                <div className="description">{parse(e.description)}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {resume.education.length > 0 && (
        <>
          <div className="heading">Education</div>
          <div className="education">
            {resume.education.map((e, index) => (
              <div key={index}>
                <div className="degree">{e.degree}</div>
                <div className="institute">{e.institute}</div>
                <div className="address">
                  {e.address} {e.startDate} -{" "}
                  {e.present ? "Present" : e.endDate}
                </div>
                <div className="detail">{e.detail}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {resume.skills.length > 0 && (
        <>
          <div className="heading">Skills</div>
          <div className="skills">
            {resume.skills.map((skill, index) => (
              <span key={index} className="skill">
                {index !== resume.skills.length - 1 ? `${skill}, ` : skill}
              </span>
            ))}
          </div>
        </>
      )}

      {resume.projects.length > 0 && (
        <>
          <div className="heading">Projects</div>
          <div className="projects">
            {resume.projects.map((project, index) => (
              <div key={index}>
                <span className="name">{project.name} &nbsp;</span>
                <span className="link">
                  <a href={project.link}>Link</a>
                </span>
                <div className="description">{parse(project.description)}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {resume.languages.length > 0 && (
        <>
          <div className="heading">Languages</div>
          <div className="languages">
            {resume.languages.map((language, index) => (
              <span key={index} className="language">
                {index !== resume.languages.length - 1
                  ? `${language}, `
                  : language}
              </span>
            ))}
          </div>
        </>
      )}

      {resume.achievements.length > 0 && (
        <>
          <div className="heading">Achievements</div>
          <div className="achievements">
            {resume.achievements.map((achievement, index) => (
              <div key={index} className="achievement">
                <span className="title">{achievement.title}</span> :
                <span className="description">{achievement.description}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Preview;
