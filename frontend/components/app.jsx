const React = require('react');
const SessionApiUtil = require('../util/session_api_util.js');
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');
const Modal = require('react-modal');
const Navbar = require('./navbar.jsx');
const Router = require('react-router').Router;
const hashHistory = require('react-router').hashHistory;

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

guestLogin: function() {
  SessionActions.login({email: "guest", password: "password"});
},

 componentWillMount() {
    Modal.setAppElement(document.getElementById("root"));
 },

  render: function() {
    return (
      <div>
      <Navbar/>
      {this.props.children}
      <br/>
        <button onClick={this.guestLogin}>Guest Login</button>
        <button onClick={this.openSignUpForm}>Sign Up</button>
        <button onClick={this.openLoginForm}>Log In</button>
      </div>
    );
  }
});

module.exports = App;
