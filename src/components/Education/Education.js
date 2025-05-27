import React from 'react';
import EducationCard from './EducationCard';
import { GraduationCap, TrendingUp } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Cincinnati",
      date: "May 2025",
      cgpa: "3.917",
      coursework: [
        "Advanced Software Engineering",
        "Software Architecture", 
        "Operating Systems"
      ],
      isLatest: true
    },
    {
      degree: "Bachelor of Technology in Electronics & Communication Engineering",
      institution: "Sreenidhi Institute of Science and Technology",
      date: "Jun 2022",
      cgpa: "3.19",
      coursework: [
        "Java",
        "Database Systems",
        "Data Structures & Algorithms",
        "Object-Oriented Programming"
      ]
    }
  ];

  return (
    <section className="education-section">
      <div className="background-decorator top-right-blur" />
      <div className="background-decorator bottom-left-blur" />

      <div className="education-container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap className="section-tag-icon" />
            <span className="section-tag-text">Academic Journey</span>
          </div>

          <h2 className="section-title">Education</h2>

          <p className="section-subtitle">
            My academic journey showcases a strong foundation in engineering and computer science, 
            with continuous growth in software development and system design.
          </p>

          <div className="education-stats">
            <div className="stat-card">
              <div className="stat-content">
                <TrendingUp className="stat-icon green" />
                <div>
                  <div className="stat-value">3.917</div>
                  <div className="stat-label">Current CGPA</div>
                </div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-content">
                <GraduationCap className="stat-icon blue" />
                <div>
                  <div className="stat-value">2</div>
                  <div className="stat-label">Degrees</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />
          <div className="timeline-cards">
            {educationData.map((education, index) => (
              <div key={index} className={`timeline-entry ${index % 2 === 0 ? 'normal' : 'reverse'}`}>
                <div className="timeline-dot" />
                <div className={`timeline-card ${index % 2 === 0 ? 'pad-right' : 'pad-left'}`}>
                  <EducationCard {...education} />
                </div>
                <div className="timeline-spacer" />
              </div>
            ))}
          </div>
        </div>

        <div className="call-to-action">
          <div className="cta-box">
            <h3 className="cta-title">Ready to Learn More?</h3>
            <p className="cta-text">
              I'm always eager to expand my knowledge and take on new challenges in software engineering.
            </p>
            <button className="cta-button">View My Projects</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
