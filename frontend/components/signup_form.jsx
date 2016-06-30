const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SessionApiUtil = require('../util/session_api_util.js');
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');
const ErrorStore = require('../stores/error_store.js');
const Modal = require('react-modal');

const SignupForm = React.createClass({
  getInitialState: function() {
    return { email: "", password: "" };
  },

  componentDidMount: function() {
    SessionStore.addListener(this.isUserLoggedIn);
    ErrorStore.addListener();
  },

  isUserLoggedIn: function() {
    if(SessionStore.isUserLoggedIn()) {
      hashHistory.push(`api/users/${SessionStore.currentUser().id}`);
    }
  },

  signingUp: function() {
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
    hashHistory.goBack();
  },

  render: function() {
    return (
      <Modal isOpen="true">
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={this.signingUp}>
          <label name="email">Email: </label>
          <input type="text" id="email" value={this.state.email}
            onChange={this.update("email")}></input>
            <br/><br/>
          <label name="password">Password: </label>
          <input type="password" id="password" value={this.state.password}
            onChange={this.update("password")}></input>
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
