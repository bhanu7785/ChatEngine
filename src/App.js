import logo from './logo.svg';
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  
  if(!localStorage.getItem('username')) return <LoginForm />


  return (
  <ChatEngine   
    height="100vh"
    projectID="ad817d22-0af7-4cc7-af70-3f17b39f05cc"
    userName ={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} ></ChatFeed> }
  />
  );
}

export default App;
