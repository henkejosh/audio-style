const React = require('react');
const SessionStore = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');
const hashHistory = require('react-router').hashHistory;
const Modal = require('react-modal');

const LoginForm = React.createClass({
  getInitialState: function() {
    return { email: "", password: "" };
  },

  componentDidMount: function() {
    SessionStore.addListener(this.isUserLoggedIn);
  },

  isUserLoggedIn: function() {
    if(SessionStore.isUserLoggedIn()) {
      hashHistory.push(`api/users/${SessionStore.currentUser().id}`);
    }
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

  loggingIn: function(event) {
    event.preventDefault();
    SessionActions.login(this.state);
  },

  render: function() {
    return (
      <Modal isOpen="true">
        <div>
          <form onSubmit={this.loggingIn}>
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

module.exports = LoginForm;
