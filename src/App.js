
  import './App.css';
  import React from 'react';
  import Person from './Person/Person';

  const App = () => {
    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <Person name="Devansh" age="26"/>
      <Person name="Ashish" age="27">My Hobbies: Coding</Person>
      <Person name="Rohit" age="28"/>
  
      </div> 
      
    );

  //return React.createElement('div',{className: 'App'  },React.createElement('h1',null,'Does this work now'))
  }
  
  export default App;
