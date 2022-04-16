import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "AKANDA", age: 77 },
      { name: "ANIKE", age: 4 },
      { name: "ADISA", age: 777 }
    ]

  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);
    

  const switchNameHandler = (newName) => {
    // console.log('was clicked!');
    setPersonsState({
      persons: [
        { name: newName, age: 777 },
        { name: "ANIKE", age: 12 },
        { name: "Zaddy", age: 417 }
      ]
    });
  };

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is my first trial but i don dey get errors</p>
        <p>Soon i will become a boss</p>
        <button onClick={switchNameHandler.bind(this, 'AkandaADE')}>Switch Name</button>
        <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} />
        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} />
        <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} 
        click={this.switchNameHandler.bind(this, 'Akanda!')} >My position: Kingship</Person>
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi, I m React App'))
  }


export default app;
