const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');
const ErrorStore = require('../stores/error_store.js');
const Modal = require('react-modal');
const modStyle = require('./modal_styles.js');

const SignupForm = React.createClass({
  getInitialState: function() {
    return { email: "", password: "" };
  },

  getErrors: function(type) {
    const errors = ErrorStore.formErrors("signup");
    if(!errors) { return; }
    return errors[type];
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this.isUserLoggedIn);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  isUserLoggedIn: function() {
    if(SessionStore.isUserLoggedIn()) {
      hashHistory.push(`api/users/${SessionStore.currentUser().id}`);
    }
  },

  signingUp: function(event) {
    event.preventDefault();
    SessionActions.signup(this.state);
  },

  update: function(prop) {
    return (e) => {
      this.setState({
        [prop]: e.target.value
      });
    };
  },

  backToHome: function() {
    hashHistory.push("/");
  },

  render: function() {
    return (
      <Modal style={modStyle}
        isOpen="true">
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={this.signingUp}>

          <label name="email">Email: </label>
          <input type="text" id="email" value={this.state.email}
            onChange={this.update("email")}></input>
            <div>{this.getErrors("email")}</div>
            <br/><br/>
          <label name="password">Password: </label>
          <input type="password" id="password" value={this.state.password}
            onChange={this.update("password")}></input>
            <div>{this.getErrors("password")}</div>
            <br/><br/>
          <input type="submit" value="Submit"></input>
          </form>
          <button onClick={this.backToHome}>Cancel</button>
        </div>
      </Modal>
    );
  }
});

module.exports = SignupForm;
