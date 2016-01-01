/* FormDispatcher.js
 * Flux dispatcher for our form
 * Dependencies: flux module, FormStore service, FORM_ACTIONS constant
 * Author: Joshua Carter
 * Created: December 31, 2015
 */
"use strict";
//import modules
import Flux from 'flux';
//function to create our dispatcher
var FormDispatcher = function (FormStore, FORM_ACTIONS) {
    //create new dispatcher
    var Dispatcher = new Flux.Dispatcher(),
        //collection of actions for our form
        dispatchActions = {},
        //shortcut for our constants
        FA = FORM_ACTIONS;
        
    //create disptach actions
    dispatchActions[FA.UPDATE] = function (data) {
        //if we received fields, update the store
        if (data.fields) {
            FormStore.updateFields(data.fields);
        }
    };
    dispatchActions[FA.SUBMIT] = function (data) {
        //submit form data
        FormStore.submitData();
    };
    
    // Register dispatch callback to handle all updates
    Dispatcher.register(function(action) {
        //if we have a valid action
        if (action.actionType in dispatchActions) {
            //then execute the action
            dispatchActions[action.actionType](action);
        }   //else, do nothing
    });
    
    return Dispatcher;
};
//inject resources into dispatcher function
FormDispatcher.$inject = ['FormStore', 'FORM_ACTIONS'];
//export dispatcher function
export { FormDispatcher };