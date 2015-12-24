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
            <input className="column two right" type="submit" name="next" value="Next" />
        );
    }
};
//export component
export { Next };
