/* Input.js
 * Displays a label and input in form
 * Dependencies: React, InputGroup component
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import React from 'react';
//include components
import { InputGroup } from './InputGroup.js';
//create Input react component
var Input = class extends React.Component {
    constructor (props) {
        super(props);
        //set initial state
        this.state = {
            changed: false,
            value: this.props.value
        };
    }
    
    render () {
        //set value of our input
        var val = this.state.value;
        //if our state's value is empty, and we received a new value from props
        if (!this.state.changed && val == '' && this.props.value != '') {
            //then update our value
            val = this.props.value;
        }
        return (
            <InputGroup float={this.props.float}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input type={this.props.type} name={this.props.name} value={val} onChange={this.handleChange.bind(this)} />
            </InputGroup>
        );
    }
    
    handleChange (e) {
        //update value
        this.setState({
            changed: true,
            value: e.target.value
        });
        //bubble event
        if (typeof this.props.onChange == "function") {
            this.props.onChange(e);
        }
    }
};
//define prop types
Input.propTypes = {
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    value: React.PropTypes.string,
    float: React.PropTypes.string,
    onChange: React.PropTypes.func
};
//export component
export { Input };
