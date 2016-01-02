/* app.js
 * Used to setup app. 
 * Dependencies: 
    - modules: angular, angular-route, angular-animate, react, ngReact
    - components: StepOneDirective, StepTwoDirective, StepThreeDirective
    - services: FormDispatcher, FormStore, FormActions
    - other: config
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import angular from 'angular';
import ngRouteModule from 'angular-route';
import ngAnimate from 'angular-animate';
import React from 'react';
import ngReact from 'ngreact';
//include components
import { MenuDirective } from './menu/Menu.js';
import { StepOneDirective } from './form/step-one/StepOne.js';
import { StepTwoDirective } from './form/step-two/StepTwo.js';
import { StepThreeDirective } from './form/step-three/StepThree.js';
//include services
import { FormDispatcher } from './form/flux/FormDispatcher.js';
import { FormStore } from './form/flux/FormStore.js';
import { FormActions } from './form/flux/FormActions.js';
import { GetLocation } from './form/services/GetLocation.js';
//include other objects
import { config } from './config.js';
//create app module
var app = angular.module('DEVTEST.xyz', ['react', 'ngRoute', 'ngAnimate'])
    .config(['$routeProvider', config])
    //create constants
    .constant('FORM_ACTIONS', {
        UPDATE: 1,
        SUBMIT: 2
    })
    //create services
    .factory('FormDispatcher', FormDispatcher)
    .service('FormStore', FormStore)
    .service('FormActions', FormActions)
    .service('GetLocation', GetLocation)
    //wrap React components in Angular directives
    .directive("menu", MenuDirective)
    .directive("stepOne", StepOneDirective)
    .directive("stepTwo", StepTwoDirective)
    .directive("stepThree", StepThreeDirective);
    