/* InputGroup.js
 * Displays a label and input in form
 * Dependencies: React
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import React from 'react';
//create InputGroup react component
var InputGroup = class extends React.Component {
    render () {
        var className = "input-group";
        if (this.props.float) {
            className += " " + this.props.float;
        }
        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
};
//define prop types
InputGroup.propTypes = {
    float: React.PropTypes.string
};
//export component
export { InputGroup };
