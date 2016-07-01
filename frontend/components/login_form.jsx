const React = require('react');
const SessionStore = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');
const hashHistory = require('react-router').hashHistory;
const ErrorStore = require('../stores/error_store.js');
const Modal = require('react-modal');
const modStyle = require('./modal_styles.js');

const LoginForm = React.createClass({
  getInitialState: function() {
    return { email: "", password: "" };
  },

  handleErrors: function() {
    const errors = ErrorStore.formErrors("login");
    if(!errors) { return; }
    return Object.keys(errors).map( error => {
      return (
        <div key={error}>{errors[error]}</div>
      );
    });
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
      hashHistory.push(`/songs`);
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
    hashHistory.push("/");
  },

  loggingIn: function(event) {
    event.preventDefault();
    SessionActions.login(this.state);
  },

  render: function() {
    return (
      <Modal style={modStyle}
        isOpen="true">
        <div>
        { this.handleErrors() }
        <h2>Log In</h2>
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
