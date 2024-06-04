import React, { useState } from 'react';
import './Ats.css';
import Nav from './Nav.js';
const Ats = () => {
    const [atsScore, setATSScore] = useState(null);
    const [resumeText, setResumeText] = useState('');
    const [parsing, setParsing] = useState(false); // State to indicate if text is being parsed

    const calculateATSScore = (resumeText) => {
        const keywords = {
            "Java": 10,
            "JavaScript": 8,
            "Python": 9,
            "HTML": 7,
            "CSS": 7,
            "React": 8,
            "Node.js": 8,
            "Database": 8,
            "Communication Skills": 5,
            "Teamwork": 5,
            "Problem Solving": 7,
        };

        // Convert resume text to lowercase for case-insensitive matching
        const lowercaseText = resumeText.toLowerCase();
        // Initialize total score
        let totalScore = 0;
        for (const [keyword, weight] of Object.entries(keywords)) {
            if (lowercaseText.includes(keyword.toLowerCase())) {
                totalScore += weight;
            }
        }
        // Ensure the total score is within a specific range (0 to 100)
        totalScore = Math.min(Math.max(totalScore, 0), 100);
        return totalScore;
    };

    const handleCalculateClick = () => {
        try {
            setParsing(true); // Set parsing state to true
            const score = calculateATSScore(resumeText);
            setATSScore(score);
            setParsing(false); // Set parsing state back to false after parsing is done
        } catch (error) {
            console.error('Error parsing resume:', error);
            setParsing(false); // Set parsing state back to false in case of error
        }
    };

    const handleTextChange = (event) => {
        setResumeText(event.target.value);
    };

    return (
        <div><Nav/>
             <div className="ats-container" > 
            <h1>Paste your resume to check your ATS score</h1>
            <textarea rows="20" cols="110" value={resumeText} onChange={handleTextChange} /><br></br>
            <button onClick={handleCalculateClick}>Calculate ATS Score</button><br></br>
            {parsing && <p>Loading...</p>}
            {atsScore !== null && <p>ATS Score: {atsScore}</p>}
        </div>
        </div>
    );
};

export default Ats;
