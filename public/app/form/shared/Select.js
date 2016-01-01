/* Select.js
 * Displays a label and select input in form
 * Dependencies: React
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import React from 'react';
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
            optionNodes = [];
        //loop options
        for (var opt in this.props.options) {
            optionNodes.push(
                <option key={opt} val={opt}>{this.props.options[opt]}</option>
            );
        };
        //if our state's value is empty, and we received a new value from props
        if (!this.state.changed && !val && this.props.value != '') {
            //then update our value
            val = this.props.value;
        }
        return (
            <div className="input-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <select name={this.props.name} value={val} onChange={this.handleChange.bind(this)}>
                    {optionNodes}
                </select>
            </div>
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
    onChange: React.PropTypes.func
};
//export component
export { Select };
