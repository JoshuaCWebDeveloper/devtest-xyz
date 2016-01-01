/* StepTwo.js
 * Displays step two
 * Dependencies: React, us
    - components: Input, Select, Back, Next
    - services: FormStore, FormActions
    - resources: $scope, $location
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import React from 'react';
import us from 'us';
//include components
import { Input } from '../shared/Input.js';
import { Select } from '../shared/Select.js';
import { Back } from '../shared/Back.js';
import { Next } from '../shared/Next.js';
//create controller for StepTwo
var StepTwoController = class {
        constructor ($scope, $location, FormStore, FormActions) {
            //use us module to get list of states
            var usst = us.STATES_AND_TERRITORIES,
                //create listener for changes on the store
                changeListener = function () {
                    this.getFormFields();
                    //this function is called outside of Angular, apply changes to scope
                    $scope.$apply();
                }.bind(this);
            
            //create collection of states for select list    
            this.states = {0: "Select"};
            for (var i=0; i<usst.length; i++) {
                //add state
                this.states[usst[i].abbr] = usst[i].abbr;
            }
            
            this.FormStore = FormStore;
            this.FormActions = FormActions;  
            //create methods to back and forwards
            this.navNext = function () {
                $location.path('/step-3');
                $scope.$apply();    
            }
            this.navBack = function () {
                $location.path('/');
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
            this.fields = this.FormStore.getFields(['city', 'state', 'birth', 'phone']);
        }
    },
    //create StepTwo React component
    StepTwo = class extends React.Component {
        constructor(props) {
            super(props);
            //create collection to store field values
            this.fields = {};    
        }
        
        render () {
            return (
                <form name="featured" method="get" action="#" onSubmit={this.handleSubmit.bind(this)}>
                    
                    <Input 
                        type="text" name="city" label="City" float="left" 
                        value={this.props.t.fields.city} 
                        onChange={this.createHandleChange('city').bind(this)}  
                    />
                    <Select 
                        name="state" label="State" float="right" 
                        options={this.props.t.states} 
                        value={this.props.t.fields.state} 
                        onChange={this.createHandleChange('state').bind(this)}  
                    />
                    <Input 
                        type="date" name="birth" label="Birthdate" float="left" 
                        value={this.props.t.fields.birth} 
                        onChange={this.createHandleChange('birth').bind(this)}  
                    />
                    <Input 
                        type="tel" name="phone" label="Phone Number" float="right" 
                        value={this.props.t.fields.phone} 
                        onChange={this.createHandleChange('phone').bind(this)}  
                    />
                    
                    <Back onClick={this.handleBack.bind(this)} />
                    <Next />
                    
                </form>
            );
        }
        
        handleSubmit (e) {
            //prevent default
            e.preventDefault();
            //update form data
            this.props.t.FormActions.update(this.fields);
            //go to the next page
            this.props.t.navNext();
        }
        
        handleBack (e) {
            //prevent default
            e.preventDefault();
            //go to previous page
            this.props.t.navBack();
        }
        
        //create change event listener that updates specified field value
        createHandleChange (field) {
            return function (e) {
                this.fields[field] = e.target.value;
            }
        }
    },
    //create directive to wrap React component in
    StepTwoDirective = function (reactDirective) {
       return reactDirective(StepTwo, undefined, {
           controller: StepTwoController, 
           controllerAs: 'scope'
       });
    };
//inject services and resources into controller
StepTwoController.$inject = ['$scope', '$location', 'FormStore', 'FormActions'];
//define prop types of StepTwo componnet
StepTwo.propTypes = {
    t: React.PropTypes.object
};
//inject resources into directive
StepTwoDirective.$inject = ['reactDirective'];
//export StepTwo directive
export { StepTwoDirective };
