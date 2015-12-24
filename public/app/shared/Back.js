/* Back.js
 * Displays the back button in form
 * Dependencies: React
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import React from 'react';
//create Back react component
var Back = class extends React.Component {
    render () {
        return (
            <input type="button" name="back" value="Back" />
        );
    }
};
//export component
export { Back };
