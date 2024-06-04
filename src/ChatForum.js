// ChatForum.js
import React from 'react';
import { useLocalStorage } from 'react-use';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';
import Nav from './Nav';
import './ChatForum.css';
import { withAuthenticator } from '@aws-amplify/ui-react';


function ChatForum({ user }) {
  const [questions, setQuestions] = useLocalStorage('questions', []);

  const addQuestion = (question) => {
    const newQuestion = { ...question, id: questions.length + 1, userName: user.username };
    setQuestions([...questions, newQuestion]);
  };

  const addAnswer = (questionId, answerText) => {
    setQuestions(
      questions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            answers: [...(question.answers || []), answerText],
          };
        }
        return question;
      })
    );
  };

  return (
    <>
      <Nav />
      <div className="ChatForum">
        <h1>Chat Forum</h1>
        <QuestionForm addQuestion={addQuestion} user={user} />
        <QuestionList questions={questions} addAnswer={addAnswer} />
      </div>
    </>
  );
}
 export default withAuthenticator(ChatForum);
