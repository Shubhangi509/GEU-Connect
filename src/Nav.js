import { withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav({signOut,user}) {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/chat-forum">Chat Forum</Link></li>
        <li><Link to="/placement-prep">Placement Preparation</Link></li>
        <li><Link to="/ats-score">ATS Score</Link></li>

        <li><Link to="/"><button style={{marginLeft:10,paddingLeft:50,paddingRight:50}} onClick={signOut}>Sign out</button></Link></li>
      </ul>
    </nav>
  );
}

export default withAuthenticator(Nav);
