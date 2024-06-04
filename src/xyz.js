import React from 'react';
import Nav from './Nav.js';
import './PlacementPrep.css';

function PlacementPrep() {
  return (
    <div className="c1">
      <Nav/>
      <h2>Placement Preparation Material</h2>
      <ul>
        <li>
          <h3>Resume Tips</h3>
          <ul>
            <li><a href="https://www.thebalancecareers.com/top-resume-writing-tips-2063314">Top Resume Writing Tips</a></li>
            <li><a href="https://www.indeed.com/career-advice/resumes-cover-letters/resume-writing-tips">Resume Writing Tips</a></li>
          </ul>
        </li>
        {/* Other categories of preparation materials */}
      </ul>
    </div>
  );
}

export default PlacementPrep;
