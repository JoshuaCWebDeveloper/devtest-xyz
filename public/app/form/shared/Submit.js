/* Submit.js
 * Displays the submit button in form
 * Dependencies: React, InputGroup component
 * Author: Joshua Carter
 * Created: December 31, 2015
 */
"use strict";
//include modules
import React from 'react';
//include components
import { InputGroup } from './InputGroup.js';
//create Submit react component
var Submit = class extends React.Component {
    render () {
        return (
            <InputGroup float="right">
                <button type="submit" name="next">
                    Submit <span className="xyz-icon">1</span>
                </button>
            </InputGroup>
        );
    }
};
//export component
export { Submit };
