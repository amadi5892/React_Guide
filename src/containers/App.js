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
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import WithClass from '../hoc/WithClass';
// import styled from 'styled-components';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'}; // dynamic styling
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
  
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 'aksks', name: 'Max', age: 28},
      {id: 'dfdv', name: 'Manu', age: 29},
      {id: 'kidid', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  // the spread operator helps update state by creating a copy so that you could change it and then it updates it with the most recently updated state

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  }

  render() {
    console.log('[App.js] render');
    // inline styling
  
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler} 
          changed={this.nameChangeHandler} />
          
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
      ;

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        {this.state.showCockpit ? (
        <Cockpit 
        showPersons={this.state.showPersons} 
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler}
        title={this.props.appTitle} />) : null}
        {persons}
      </WithClass>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Hi I\'m a React App!!!'))
  }
}

export default App;

// state is only usable in extended components
// for the handlers, use the bind method over using the function call method; the function call can be inefficient
// event.target.value allows you to dynamically change something and how handle inputs
// wrap the rendered with <StyleRoot></StyleRoot>