/* app.js
 * Used to setup app. 
 * Dependencies: 
    - modules: angular, react, ngReact
    - components: StepOneDirective
    - services: 
    - other: config
 * Author: Joshua Carter
 * Created: December 23, 2015
 */
"use strict";
//include modules
import angular from 'angular';
import ngRouteModule from 'angular-route';
import React from 'react';
import ngReact from 'ngreact';
//include components
import { MenuDirective } from './menu/Menu.js';
import { StepOneDirective } from './form/step-one/StepOne.js';
//include services
//include other objects
import { config } from './config.js';
//create app module
var app = angular.module('DEVTEST.xyz', ['react', 'ngRoute'])
    .config(['$routeProvider', config])
    //create constants
    //create services
    //wrap React components in Angular directives
    .directive("menu", MenuDirective)
    .directive("stepOne", StepOneDirective);
    