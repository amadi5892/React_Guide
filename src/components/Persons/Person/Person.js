import React, {Component} from 'react';
import classes from './Person.css';



class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')

        return (
            // <div className="Person" style={style}>
            <div className={classes.Person}>
                <p onClick={this.props.click} >I'm a {this.props.name} and I am {this.props.age} years old!!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
    
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    
}

export default Person;

// a component is a function returning some JSX