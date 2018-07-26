import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'dfsdf1', name: 'Max11', age: 28 },
      { id: 'strter2', name: 'Nhi', age: 38 },
      { id: 'sdede3', name: 'hiep', age: 48 },
    ],
    otherState: 'some other value',
    showPersons: false,

  }

  deletePersonHandle = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  nameChangeHandle = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }

    //const person = Object.assign({}, this.state.person[personIndex] );

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }
  togglePersonHandle = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  render() {

    let persons = null;
    console.log("aaa",this.state.persons);


    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandle}
            changed={this.nameChangeHandle}
          />
    }
    
    return (
      <div className={classes.App}>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons} 
          persons={this.state.persons} 
          clicked={this.togglePersonHandle}
        />
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React app'));
  }
}

export default App;
