import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Auxillary from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext; // it can be accessed from outside without the need to instantiate an object based on this class first

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...')

        return (
            <Auxillary>
                    {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
             {/* <div className="Person" style={style}></div> */}
                <p onClick={this.props.click} >I'm a {this.props.name} and I am {this.props.age} years old!!</p>,
                <p>{this.props.children}</p>,
                <input type="text"
                // ref={(inputEl) => {this.inputElement = inputEl}}
                ref={this.inputElementRef} 
                onChange={this.props.changed} 
                value={this.props.name} />
            </Auxillary>
        );
    }
    
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    
}

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age:PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);

// a component is a function returning some JSX
// this is a class based component