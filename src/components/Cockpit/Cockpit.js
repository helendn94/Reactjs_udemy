import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
        console.log(btnClass);
    }
    

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={classes.button}
                onClick={props.clicked}
            >Toggle Person</button>
        </div>
    );
}

export default cockpit;