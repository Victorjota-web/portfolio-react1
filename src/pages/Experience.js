import React from 'react';
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>

      <div className="timeline-item">
        <div className="timeline-icon study">
          <span className="icon">📚</span>
        </div>
        <h3 className="timeline-title">2023 - Start of studies</h3>
        <p className="timeline-description">
          I started studying web development with HTML, CSS, JavaScript.<b> (Still looking for the first opportunity as a junior developer)</b>
        </p>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon work">
          <span className="icon">💼</span>
        </div>
        <h3 className="timeline-title">2024 - Notary's Office</h3>
        <p className="timeline-description">
          I worked as a clerk in a notary's office, I'm putting it here as my first job, because here I was able to develop <b>great typing skills, teamwork, time management, and deadlines.</b> (2024/08) to (2025/02)
        </p>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon study">
          <span className="icon">📚</span>
        </div>
        <h3 className="timeline-title">2024 - Start of college</h3>
        <p className="timeline-description">
        In <b>August 2024</b>, I started my degree in Systems Analysis and Development, aiming for my diploma and qualification in the job market.
        </p>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon skills">
          <span className="icon">⚙️</span>
        </div>
        <h3 className="timeline-title">2025 - Skills Expansion</h3>
        <p className="timeline-description">
          I got an internship that starts in April (2025), At first I will work with <b>Nodejs and React</b>. I'm sure that I will learn a lot there and apply my knowledge better, but <b>I'm always looking for better growth opportunities.</b>
        </p>
      </div>
    </div>
  );
};

export default Experience;
