/* GetLocation.js
 * Fetches info for location
 * Dependencies: $http
 * Author: Joshua Carter
 * Created: December 31, 2015
 */
"use strict";
//create GetLocation service
var GetLocation = class {
    constructor ($http) {
        //private static properties that define service
        this._$http = $http;
        this._apiRoot = 'http://ziptasticapi.com/';
        //private properties that define instance
        //store a location request in progress
        this._locationRequest = false;
    }
    
    //get location from server
    // - (int, string) The zip code of our location
    location (zip) {
        //if there is a request for location in progress
        if (this._locationRequest) {
            //then return the unresolved promise
            return this._locationRequest;
        }
        //else, create GET request, and return promise
        return this._locationRequest = this._$http({
            method: 'GET',
            url: this._apiRoot + zip
        }).then(function (response) {
            //SUCCESS
            //if there was an error
            if (response.data.error) {
                //then return nothing
                return null;
            }
            //else, just return the data
            return response.data;
        }, function (response) {
            //ERROR
            return null;
        }).finally(function () {
            //remove the saved request
            this._locationRequest = false;
        }.bind(this));
    }
};
//inject resources and contants into service
GetLocation.$inject = ['$http'];
//export GetLocation service
export { GetLocation };
