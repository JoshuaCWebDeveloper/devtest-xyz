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
    render () {
        //loop options
        var optionNodes = [];
        for (var opt in this.props.options) {
            optionNodes.push(
                <option val={opt}>{this.props.options[opt]}</option>
            );
        };
        return (
            <div className="input-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <select name={this.props.name}>
                    {optionNodes}
                </select>
            </div>
        );
    }
};
//define prop types
Select.propTypes = {
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    options: React.PropTypes.object
};
//export component
export { Select };
