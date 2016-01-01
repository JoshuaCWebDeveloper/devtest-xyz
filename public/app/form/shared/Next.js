/* Next.js
 * Displays the next button in form
 * Dependencies: React, InputGroup component
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import React from 'react';
//include components
import { InputGroup } from './InputGroup.js';
//create Next react component
var Next = class extends React.Component {
    render () {
        return (
            <InputGroup float="right">
                <button type="submit" name="next">
                    Next <span className="xyz-icon">1</span>
                </button>
            </InputGroup>
        );
    }
};
//export component
export { Next };
