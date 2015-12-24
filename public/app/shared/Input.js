/* Input.js
 * Displays a label and input in form
 * Dependencies: React
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import React from 'react';
//create Input react component
var Input = class extends React.Component {
    render () {
        return (
            <div className="input-group column two">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input type={this.props.type} name={this.props.name} />
            </div>
        );
    }
};
//define prop types
Input.propTypes = {
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    type: React.PropTypes.string
};
//export component
export { Input };
