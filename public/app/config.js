/* config.js
 * Creates config block for app and set's up routing; also creates other app-wide objects
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//create config
var config = function ($routeProvider) {
        //create routes
        $routeProvider
            .when('/', {
                template: '<step-one t="scope"></step-one>'
            })
            .when('/step-2', {
                template: '<step-two t="scope"></step-two>'
            })
            .when('/step-3', {
                template: '<step-three t="scope"></step-three>'
            })
            .otherwise({
                redirectTo: '/'
            });
    };
//export objects
export { config };
