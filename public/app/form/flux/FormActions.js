/* FormActions.js
 * Flux actions for our form
 * Dependencies: FormDispatcher service, FORM_ACTIONS constant
 * Author: Joshua Carter
 * Created: December 31, 2015
 */
"use strict";
//create our actions class
var FormActions = class {
    constructor (FormDispatcher, FORM_ACTIONS) {
        //create shortcut for our constants
        this._FA = FORM_ACTIONS;
        this._FormDispatcher = FormDispatcher;
    }
    
    //update fields in the form
    //can also be used to add new fields
    // - fields (obj) - A collection of form fields to update or add
    update (fields) {
        this._FormDispatcher.dispatch({
            actionType: this._FA.UPDATE,
            fields: fields
        });
    }
    
    //submit our form data
    submit () {
        this._FormDispatcher.dispatch({
            actionType: this._FA.SUBMIT
        });
    }
};
//inject resources info actions class
FormActions.$inject = ['FormDispatcher', 'FORM_ACTIONS']
//export actions class
export { FormActions };