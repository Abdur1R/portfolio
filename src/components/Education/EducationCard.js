import React from 'react';
import { Calendar, GraduationCap, BookOpen } from 'lucide-react';
import './EducationCard.css';

const EducationCard = ({
  degree,
  institution,
  date,
  cgpa,
  coursework,
  isLatest = false
}) => {
  return (
    <div className={`education-card ${isLatest ? 'latest' : ''}`}>
      {isLatest && (
        <div className="badge-current">
          Current
        </div>
      )}

      <div className="education-card-content">
        <div className="education-header">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className={`icon-container ${isLatest ? 'latest' : ''}`}>
                <GraduationCap className={`w-6 h-6 ${isLatest ? 'text-blue-600' : 'text-gray-600'}`} />
              </div>
              <h3 className="education-title">
                {degree}
              </h3>
            </div>

            <p className="education-institution">
              {institution}
            </p>

            <div className="education-meta">
              <div className="education-meta-item">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="education-cgpa">
                CGPA: {cgpa}
              </div>
            </div>
          </div>
        </div>

        <div className="coursework-section">
          <div className="coursework-header">
            <BookOpen className="w-5 h-5 text-gray-600" />
            <h4>Key Coursework</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course, index) => (
              <span key={index} className="coursework-badge">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
