/* Next.js
 * Displays the next button in form
 * Dependencies: React
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import React from 'react';
//create Next react component
var Next = class extends React.Component {
    render () {
        return (
            <div className="input-group right">
                <button type="submit" name="next">
                    Next <span className="xyz-icon">1</span>
                </button>
            </div>
        );
    }
};
//export component
export { Next };
