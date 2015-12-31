/* StepOne.js
 * Displays the team list
 * Dependencies: React, 
    - components: Input, Next
    - services: 
    - resources: 
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import React from 'react';
//include components
import { Input } from '../shared/Input.js';
import { Next } from '../shared/Next.js';
//create controller for StepOne
var StepOneController = class {
        
    },
    //create StepOne React component
    StepOne = class extends React.Component {
        render () {
            return (
                <form name="featured" method="get" action="#">
                    
                    <Input type="text" name="first" label="First Name" float="left" />
                    <Input type="text" name="last" label="Last Name" float="right" />
                    <Input type="text" name="email" label="Email Address" float="left" />
                    <Input type="text" name="zip" label="Zip Code" float="right" />
                    
                    <Next />
                    
                </form>
            );
        }
    },
    //create directive to wrap React component in
    StepOneDirective = function (reactDirective) {
       return reactDirective(StepOne, undefined, {
           controller: StepOneController, 
           controllerAs: 'scope'
       });
    };
//inject services and resources into controller
StepOneController.$inject = [];
//define prop types of StepOne componnet
StepOne.propTypes = {
    t: React.PropTypes.object
};
//inject resources into directive
StepOneDirective.$inject = ['reactDirective'];
//export StepOne directive
export { StepOneDirective };
