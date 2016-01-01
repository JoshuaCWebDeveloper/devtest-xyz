/* Submit.js
 * Displays the submit button in form
 * Dependencies: React
 * Author: Joshua Carter
 * Created: December 31, 2015
 */
"use strict";
//include modules
import React from 'react';
//create Submit react component
var Submit = class extends React.Component {
    render () {
        return (
            <div className="input-group right">
                <button type="submit" name="next">
                    Submit <span className="xyz-icon">1</span>
                </button>
            </div>
        );
    }
};
//export component
export { Submit };
