// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Stephanie', age: 26}
//     ],
//     otherState: 'some other value'
//   });

//   const switchNameHandler = () => {
//         // console.log('Was clicked!')
//         // DON'T DO THIS! this.state.persons[0].name = 'Maximilian';
//         setPersonsState({
//           persons: [
//         {name: 'Maximilian', age: 28},
//         {name: 'Manu', age: 29},
//         {name: 'Stephanie', age: 27}]
//         })
//       }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   )
// }

// export default app;

// You can have multiple useState calls

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 26}]
      })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  }

  render() {
    // inline styling
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
  
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age} />
          })}
            {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons} 
        
        
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Hi I\'m a React App!!!'))
  }
}

export default App;

// state is only usable in extended components
// for the handlers, use the bind method over using the function call method; the function call can be inefficient
// event.target.value allows you to dynamically change something and how handle inputs