import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Message } from './components/Message/Message';

const name = "Alex";

function App() {
  const foo = () => {
    alert("Hello world");
  };

  return (
    <div className='App'>
      <Message name={name} number={123+10} doSmth={foo} bold={true} />
      <Message name="Other name" number={123+100} doSmth={foo} />
    </div>
  );
}

export default App;
