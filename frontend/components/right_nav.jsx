const React = require('react');
const SessionApiUtil = require('../util/session_api_util.js');
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');
const Modal = require('react-modal');
const Header = require('./header.jsx');
const SignupForm = require('./signup_form.jsx');
const LoginForm = require('./login_form.jsx');
const ErrorActions = require('../actions/error_actions.js');
const Router = require('react-router').Router;
const hashHistory = require('react-router').hashHistory;

const RightNav = React.createClass({
  getInitialState: function() {
   return { signUpIsOpen: false, loginIsOpen: false , authLinks: false};
 },

  openSignUpForm: function() {
    ErrorActions.clearErrors();
    // hashHistory.push("/signup");
    this.setState({ signUpIsOpen: true });
  },

  closeSignUpForm: function() {
    this.setState({signUpIsOpen: false});
  },

  openLoginForm: function() {
    ErrorActions.clearErrors();
    // hashHistory.push("/login");
    this.setState({ loginIsOpen: true });
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

  NavToUserPage: function(e) {
    e.preventDefault();
    hashHistory.replace('/user');
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
    let authLink;
    let welcome;
    if (SessionStore.currentUser().id === undefined) {
      welcome = <p className="welcome">Join</p>;
      authLink = (
        <ul className="auth-links">
          <ul>
            <li onClick={this.guestLogin}>Guest Login</li>
            <li onClick={this.openSignUpForm}>Sign Up</li>
            <li onClick={this.openLoginForm}>Log In</li>
          </ul>
        </ul>
      );
    } else {
      welcome = <p className="welcome">{SessionStore.currentUser().email}</p>;
      authLink = (<ul className="auth-links">
          <ul>
            <li onClick={this.NavToUserPage}>Profile</li>
            <li onClick={this.LogOut}>Log Out</li>
          </ul>
        </ul>
      );
    }

    // <img src="https://s3.amazonaws.com/f.cl.ly/items/0g2V1V3P08160j2t2y3X/users.png"/>
    return(
      <ul className="right-nav">
        <li className="auth-button" onClick={this.updateAuthComp}>
            {welcome}
            {this.state.authLinks ? authLink : null }
        </li>

      </ul>
    );
  }
});

module.exports = RightNav;
