/* FormStore.js
 * Flux store for our form
 * Dependencies: Events, angular modules, GetLocation service
 * Author: Joshua Carter
 * Created: December 31, 2015
 */
"use strict";
//include modules
import Events from 'events';
import angular from 'angular';
//create class for our store
var FormStore = class extends Events.EventEmitter {
    constructor (GetLocation) {
        //call EventEmitter constructor
        super();
        //save location service
        this._GetLocation = GetLocation;
        //save event to server as our change event
        this._CHANGE_EVENT = 'change';
        //create a collection of fields from our form
        this._formFields = {};
    }
    
    //determine if we have a zip code
    haveZip () {
        return ('zip' in this._formFields);
    }
    
    //update our city and state using the location service
    updateCityState () {
        //if we have a valid zip code
        if (this.haveZip() && parseInt(this._formFields.zip) > 0) {
            //then use it to get our city and state
            this._GetLocation.location(this._formFields.zip).then(function (location) {
                //SUCCESS
                var fields = {};
                //if we have a location
                if (location) {
                     //get our city and state
                     if (location.city) {
                         fields.city = location.city;
                     }
                     if (location.state) {
                         fields.state = location.state;
                     }
                     //add our city and state to our collection, 
                     //but do it outside of Angular to stay consistent
                     setTimeout( function () { this.updateFields(fields); }.bind(this), 0);
                }
            }.bind(this), function (error) {
                //ERROR
            });
        }   //else, do nothing
    }
    
    //update fields in our formFields collection
    //can also be used to add new fields
    // - fields (obj) - A collection of form fields to be merged into our collection
    updateFields (fields) {
        //if we don't have fields
        if (typeof fields != "object" || fields === null || Object.keys(fields).length < 1) {
            //do nothing
            return;
        }
        //we have fields so add them (shallow merge)
        angular.extend(this._formFields, fields);
        //if our zip was just updated
        if ('zip' in fields) {
            //then update our city and state
            this.updateCityState();
        }
        //our fields have changed
        this._emitChange();
    }
    
    //get all or some fields from our collection
    // - fields (string, obj -- array) (optional) Either single field, or array of fields to get. 
    getFields (fields) {
        var collection = {}, k;
        //if we are to get single field
        if (typeof field == 'string') {
            //get the field, if it exists
            return (field in this._formFields) ? this._formFields[field] : '';
        }
        //else, if we are to get all fields
        if (typeof fields !== 'object' && fields !== null && type) {
            //then return all fields
            return this._formFields;
        }
        //else, loop fields, get each field
        for (var i=0; i<fields.length; i++) {
            k = fields[i];
            collection[k] = (k in this._formFields) ? this._formFields[k] : '';
        }
        //return collection
        return collection;
    }
    
    //submits our form data
    submitData () {
        //convert of fields to json
        var data = JSON.stringify(this._formFields),
            //open a new window
            w = window.open('about:blank', 'Form Data', 'width=200,height=500,scrollbars,resizeable');
        //add data to window
        w.document.write(data);
    }
        
    //triggers change event on our app
    _emitChange () {
        this.emit(this._CHANGE_EVENT);
    }
    
    //used to add listeners for our change event
    addChangeListener (callback) {
        this.on(this._CHANGE_EVENT, callback);
    }
    
    //used to cleanup listeners on our change event
    removeChangeListener (callback) {
        this.removeListener(this._CHANGE_EVENT, callback);
    }
};

export { FormStore };
