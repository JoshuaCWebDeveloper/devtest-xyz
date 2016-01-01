/* Back.js
 * Displays the back button in form
 * Dependencies: React, InputGroup component
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import React from 'react';
//include components
import { InputGroup } from './InputGroup.js';
//create Back react component
var Back = class extends React.Component {
    render () {
        return (
            <InputGroup float="left">
                <button type="button" name="back" onClick={this.props.onClick}>Back</button>
            </InputGroup>
        );
    }
};
//define prop types
Back.propTypes = {
    onClick: React.PropTypes.func
};
//export component
export { Back };
