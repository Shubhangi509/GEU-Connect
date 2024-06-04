// QuestionForm.js
import React, { useState } from 'react';
import './QuestionForm.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

function QuestionForm({ addQuestion, user }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addQuestion({ text, userName: user.username }); // Include the username in the question object
    setText('');
  };

  return (
    <form className="QuestionForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ask a question..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
     </form>
  );
}

export default withAuthenticator(QuestionForm);
