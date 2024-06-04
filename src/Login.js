import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import HomePage from './HomePage'; 
import './home.css';

function Login({ signOut, user }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <HomePage /> 
    </div>
  );
}

export default withAuthenticator(Login);
