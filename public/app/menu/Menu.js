/* Menu.js
 * Displays the responsive menu
 * Dependencies: React
 * Author: Joshua Carter
 * Created: December 30, 2015
 */
"use strict";
//include modules
import React from 'react';
//create Menu React component
var Menu = class extends React.Component {
        
        constructor (props) {
            super(props);
            
            //set initial state
            this.state = { class: "" };
        }
        
        render () {
            //the entire header is rendered so that 
            //we can control both the mobile dropdown button and the nav menu
            //the only dynamic pieces are
            // - the click handler on the #nav-dropdown button
            // - the class name of the <nav> menu.
            return (
                <header>
                    <div className="container" id="top-bar">
                        <div className="logo left">
                            <a href="#"><img src="img/devtest-whitelogo.svg" alt="DEVTEST.xyz" /></a>
                        </div>
                        
                        <div id="search-bar" className="form-container right">
                            <form action="#" method="get" name="header-search">
                                <input name="query" type="text" placeholder="Type your search here..." />
                                <button className="xyz-icon" name="submit" type="submit">2</button>
                            </form>
                        </div>
                        
                        <div className="form-container right">
                            <button 
                                id="nav-dropdown" 
                                className="xyz-icon" 
                                onClick={this.handleClick.bind(this)}
                            >
                                6
                            </button>
                        </div>
                    </div>
                    
                    <nav className={this.state.class}>
                        <a href="#/">About</a>
                        <a href="#/">Rates</a>
                        <a href="#/">Requirements</a>
                        <a href="#/">FAQ</a>
                        <a href="#/" className="last">Apply!</a>
                    </nav>
                </header>
            );
        }
        
        handleClick () {
           this.setState({ class: (this.state.class == "") ? "show" : "" });
        }
        
        componentDidMount () {
            this.runOutsideJS();
        }
        
        componentDidUpdate () {
            this.runOutsideJS();
        }
        
        runOutsideJS () {
            window.runAfterReact();    
        }
    },
    //create directive to wrap React component in
    MenuDirective = function (reactDirective) {
       return reactDirective(Menu, undefined, {
           restrict: 'A'
       });
    };
//inject resources into directive
MenuDirective.$inject = ['reactDirective'];
//export Menu directive
export { MenuDirective };
