const React = require('react');
const SessionStore = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');
const hashHistory = require('react-router').hashHistory;
const ErrorStore = require('../stores/error_store.js');
const ErrorActions = require('../actions/error_actions.js');
const Modal = require('react-modal');
const modStyle = require('./modal_styles.js');
const LoginForm = require('./login_form.jsx');
const SignupForm = require('./signup_form.jsx');

const HomeAuthModal = React.createClass({
  getInitialState: function() {
    return { authModalOpen: this.props.isOpen,
      signUpIsOpen: false, loginIsOpen: false , authLinks: false };
  },

  guestLogin: function(e) {
    e.preventDefault();
    SessionActions.login({email: "guest", password: "password"});
  },

  openLoginForm: function() {
    this.setState({ loginIsOpen: true });
  },

  openSignupForm: function() {
    this.setState({ signupIsOpen: true });
  },

  willReceiveProps: function() {
    this.setState({ authModalOpen: this.props.isOpen });
  },

  closeLoginForm: function() {
    this.setState({ loginIsOpen: false });
  },

  closeSignupForm: function() {
    this.setState({ signupIsOpen: false });
  },

  cancelOut: function() {
    this.setState({ authModalOpen: false });
  },

  render: function() {
    return (
      <Modal style={modStyle} isOpen={this.props.isOpen}>
        <div className="home-auth-modal">

        <h2 className="home-modal">Welcome to <p>Kind of Blue</p></h2>

        <ul>
          <li onClick={this.guestLogin}>Guest Login</li>

          <li onClick={this.openSignupForm}><p>Sign Up</p>
            <SignupForm isOpen={this.state.signupIsOpen}
              closeForm={this.closeSignupForm}/>
            </li>

          <li onClick={this.openLoginForm}><p>Log In</p>
            <LoginForm isOpen={this.state.loginIsOpen}
              closeForm={this.closeLoginForm}/>
          </li>

          <li onClick={this.props.cancelOut}>Exit</li>
        </ul>
        </div>
        </Modal>
    );
  }
});

module.exports = HomeAuthModal;
