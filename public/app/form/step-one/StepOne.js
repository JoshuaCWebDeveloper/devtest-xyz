/* StepOne.js
 * Displays the team list
 * Dependencies: React, 
    - components: Input, Next
    - services: FormStore, FormActions
    - resources: $scope, $location
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
        constructor ($scope, $location, FormStore, FormActions) {
            //create listener for changes on the store
            var changeListener = function () {
                    this.getFormFields();
                    //this function is called outside of Angular, apply changes to scope
                    $scope.$apply();
                }.bind(this);
                
            this.FormStore = FormStore;
            this.FormActions = FormActions;  
            //create method to got to step two
            this.navNext = function () {
                $location.path('/step-2');
                $scope.$apply();    
            }
            
            //add listener for changes on store
            FormStore.addChangeListener(changeListener);
            //remove listener when we are gone
            $scope.$on('$destroy', function () {
                FormStore.removeChangeListener(changeListener);
            });
            
            //get initial state
            this.getFormFields();
        }
        
        getFormFields() {
            this.fields = this.FormStore.getFields(['first', 'last', 'email', 'zip']);
        }
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
StepOneController.$inject = ['$scope', '$location', 'FormStore', 'FormActions'];
//define prop types of StepOne componnet
StepOne.propTypes = {
    t: React.PropTypes.object
};
//inject resources into directive
StepOneDirective.$inject = ['reactDirective'];
//export StepOne directive
export { StepOneDirective };
