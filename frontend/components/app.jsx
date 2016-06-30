const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SessionApiUtil = require('../util/session_api_util.js');
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');
const Modal = require('react-modal');
const SignupForm = require('./signup_form.jsx');
// import { hashHistory, Router, Route, IndexRoute } from 'react-router'
const Router = require('react-router').Router;
const hasHistory = Router.hashHistory;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const App = React.createClass({
  getInitialState: function() {
   return { signUpIsOpen: false, loginIsOpen: false };
 },

 openSignUpForm: function() {
  //  this.setState({signUpIsOpen: true});
  hashHistory.push("/signup");
 },

 afterOpenSignUpForm: function() {
   // references are now sync'd and can be accessed.
   this.refs.subtitle.style.color = '#f00';
 },

 closeSignUpForm: function() {
   this.setState({signUpIsOpen: false});
 },

 openLoginForm: function() {
   hashHistory.push("/login");
 },

 afterOpenLoginForm: function() {
   // references are now sync'd and can be accessed.
  //  this.refs.subtitle.style.color = '#f00';
 },

 closeLoginForm: function() {
   this.setState({loginIsOpen: false});
 },

 componentWillMount() {
    Modal.setAppElement(document.getElementById("root"));
 },

  render: function() {
    return (
      <div>
        Home Page will go here

        <button onClick={this.openSignUpForm}>Sign Up!</button>
        <button onClick={this.openLoginForm}>Log In!</button>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
