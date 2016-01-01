/* StepThree.js
 * Displays step three
 * Dependencies: React
    - components: Input, Select, Back, Submit
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
import { Select } from '../shared/Select.js';
import { Back } from '../shared/Back.js';
import { Submit } from '../shared/Submit.js';
//create controller for StepThree
var StepThreeController = class {
        constructor ($scope, $location, FormStore, FormActions) {
            //create listener for changes on the store
            var changeListener = function () {
                    this.getFormFields();
                    //this function is called outside of Angular, apply changes to scope
                    $scope.$apply();
                }.bind(this);
            
            this.FormStore = FormStore;
            this.FormActions = FormActions;  
            //create method to back
            this.navBack = function () {
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
            this.fields = this.FormStore.getFields(['paydate1', 'paydate2', 'employment', 'employer']);
        }
    },
    //create StepThree React component
    StepThree = class extends React.Component {
        constructor(props) {
            super(props);
            //create collection to store field values
            this.fields = {};    
        }
        
        render () {
            //create list of employment types
            var employment = {
                0: "Select",
                contract: "Contract",
                full: "Full-Time",
                part: "Part-Time",
                self: "Self-Employed",
                temp: "Temporary"
            };
            return (
                <form name="featured" method="get" action="#" onSubmit={this.handleSubmit.bind(this)}>
                    
                    <Input 
                        type="date" name="paydate1" label="Pay Date 1" float="left" 
                        value={this.props.t.fields.paydate1} 
                        onChange={this.createHandleChange('paydate1').bind(this)}  
                    />
                    <Input 
                        type="date" name="paydate2" label="Pay Date 2" float="right" 
                        value={this.props.t.fields.paydate2} 
                        onChange={this.createHandleChange('paydate2').bind(this)}  
                    />
                    <Select 
                        name="employment" label="Employment Type" float="left" 
                        options={employment} 
                        value={this.props.t.fields.employment} 
                        onChange={this.createHandleChange('employment').bind(this)}  
                    />
                    <Input 
                        type="text" name="employer" label="Employer Name" float="right" 
                        value={this.props.t.fields.employer} 
                        onChange={this.createHandleChange('employer').bind(this)}  
                    />
                    
                    <Back onClick={this.handleBack.bind(this)} />
                    <Submit />
                    
                </form>
            );
        }
        
        handleSubmit (e) {
            //prevent default
            e.preventDefault();
            //update form data
            this.props.t.FormActions.update(this.fields);
            //submit form
            this.props.t.FormActions.submit();
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
    StepThreeDirective = function (reactDirective) {
       return reactDirective(StepThree, undefined, {
           controller: StepThreeController, 
           controllerAs: 'scope'
       });
    };
//inject services and resources into controller
StepThreeController.$inject = ['$scope', '$location', 'FormStore', 'FormActions'];
//define prop types of StepThree componnet
StepThree.propTypes = {
    t: React.PropTypes.object
};
//inject resources into directive
StepThreeDirective.$inject = ['reactDirective'];
//export StepThree directive
export { StepThreeDirective };
