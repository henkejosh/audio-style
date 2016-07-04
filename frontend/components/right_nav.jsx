const React = require('react');
const SessionApiUtil = require('../util/session_api_util.js');
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');
const Modal = require('react-modal');
const Header = require('./header.jsx');
const SignupForm = require('./signup_form.jsx');
const LoginForm = require('./login_form.jsx');
const Router = require('react-router').Router;
const hashHistory = require('react-router').hashHistory;

const RightNav = React.createClass({
  getInitialState: function() {
   return { signUpIsOpen: false, loginIsOpen: false , authLinks: false};
 },

  openSignUpForm: function() {
    hashHistory.push("/signup");
  },

  closeSignUpForm: function() {
    this.setState({signUpIsOpen: false});
  },

  openLoginForm: function() {
    hashHistory.push("/login");
  },

  closeLoginForm: function() {
    this.setState({loginIsOpen: false});
  },

  guestLogin: function(e) {
    e.preventDefault();
    SessionActions.login({email: "guest", password: "password"});
  },

  LogOut: function(e) {
    e.preventDefault();
    SessionActions.logout();
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this.isUserLoggedIn);
  },

  isUserLoggedIn: function() {
    if(SessionStore.isUserLoggedIn()) {
      hashHistory.push(`/songs`);
    }
  },

  displayAuthComponent: function() {
    if(this.props.props.location.pathname === "/login") {
      return <LoginForm/>;
    } else if(this.props.props.location.pathname === "/signup") {
      return <SignupForm />;
    }
  },

  componentWillMount() {
    Modal.setAppElement(document.getElementById("root"));
  },

  updateAuthComp: function(e) {
    e.preventDefault();
    if(this.state.authLinks) {
      this.setState({authLinks: false});
    } else {
      this.setState({authLinks: true});
    }
  },

  render: function() {
    let authLink = <ul><li onClick={this.LogOut}>Log Out</li></ul>;
    if (SessionStore.currentUser().id === undefined) {
      authLink = (
        <ul>
          <li onClick={this.guestLogin}>Guest Login</li>
          <li onClick={this.openSignUpForm}>Sign Up</li>
          <li onClick={this.openLoginForm}>Log In</li>
        </ul>
      );
    }

    return(
      <ul className="right-nav">
        <li onClick={this.updateAuthComp}>
          <img src="http://f.cl.ly/items/0g2V1V3P08160j2t2y3X/users.png"/>
          <ul className="auth-links">
            {this.state.authLinks ? authLink : null }
          </ul>
        </li>
        <li>
          upload songs button
        </li>
      </ul>
    );
  }
});

module.exports = RightNav;
