 import React from 'react';
import './QuestionList.css';  
import Question from './Question';

function QuestionList({ questions, addAnswer }) {
  return (
    <div className="QuestionList">
      <h1>Questions</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <Question question={question} addAnswer={addAnswer} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
