import React, { useState } from 'react';
import './Question.css';  
import { withAuthenticator } from '@aws-amplify/ui-react';

function Question({ question, addAnswer, user }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addAnswer(question.id, text);
    setText('');
  };

  const handleDeleteQuestion = () => {
    // Check if the current user is the owner of the question
    if (question.userName === user.username) {
      // Retrieve questions from local storage
      const storedQuestions = JSON.parse(localStorage.getItem('questions'));

      // Filter out the question to be deleted
      const updatedQuestions = storedQuestions.filter((q) => q.id !== question.id);

      // Update local storage with the modified questions array
      localStorage.setItem('questions', JSON.stringify(updatedQuestions));

      // Optionally, you can force a page reload to reflect the changes
      window.location.reload();
    } else {
      alert('You can only delete your own questions.');
    }
  };

  return (
    <div className="Question">
      <h2>{(question.text)}<span style={{float:'right'}}>Asked by : {question.userName}</span></h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Your answer..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit Answer</button>
        {question.userName === user.username && (
          <button onClick={handleDeleteQuestion}>Delete Question</button> 
        )}
      </form>
      {question.answers && (
        <ul>
          {question.answers.map((answer, index) => (
            <li key={index}>{answer}<span style={{float: 'right' }}> Answered By : {question.userName}</span></li> 
          ))}
        </ul>
      )}
    </div>
  );
}
 
export default withAuthenticator(Question);
