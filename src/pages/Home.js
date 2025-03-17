import React, { useEffect, useState } from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

export default function Home() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    const skillsSection = document.querySelector(".skills .list");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Victor</h2>
        <div className="prompt">
          <p>
            A software developer with a passion for learning and creating
          </p>
          <a href='https://www.linkedin.com/in/victor-jordão-b53a68244/' target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
          <a href='https://github.com/Victorjota-web' target='blank' rel="noopener noreferrer"><GithubIcon /> </a>
        </div>
      </div>

      <div className="skills">
        <h1>SKILLS</h1>
        <ol className={`list ${skillsVisible ? "visible" : ""}`}>
          <li className="item">
            <h2> Front-End</h2>
            <span>HTML, CSS, JavaScript, ReactJS</span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
