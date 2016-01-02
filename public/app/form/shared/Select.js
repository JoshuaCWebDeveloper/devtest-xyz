/* Select.js
 * Displays a label and select input in form
 * Dependencies: React, InputGroup component
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import React from 'react';
//include components
import { InputGroup } from './InputGroup.js';
//create Select react component
var Select = class extends React.Component {
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
        var val = this.state.value,
            optionNodes = [],
            className = "select";
        //loop options
        for (var opt in this.props.options) {
            optionNodes.push(
                <option key={opt} val={opt}>{this.props.options[opt]}</option>
            );
        };
        //if we are small
        if (this.props.small) {
            className += " small";
        }
        //if our state's value is empty, and we received a new value from props
        if (!this.state.changed && !val && this.props.value != '') {
            //then update our value
            val = this.props.value;
        }
        return (
            <InputGroup className={className} float={this.props.float}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <select name={this.props.name} value={val} onChange={this.handleChange.bind(this)}>
                    {optionNodes}
                </select>
                <div className="select-background">
                    <button className="xyz-icon">6</button>
                </div>
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
Select.propTypes = {
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    options: React.PropTypes.object,
    value: React.PropTypes.node,
    float: React.PropTypes.string,
    onChange: React.PropTypes.func,
    small: React.PropTypes.bool
};
//export component
export { Select };
