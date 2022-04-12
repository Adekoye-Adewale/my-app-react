import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      { name: "AKANDA", age: 77 },
      { name: "ANIKE", age: 4 },
      { name: "ADISA", age: 777 }
    ]

  }

  switchNameHandler = () => {
    // console.log('was clicked!');
    this.setState({persons: })
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is my first trial but i don dey get errors</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My position: Kingship</Person>
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi, I m React App'))
  }
}

export default App;
