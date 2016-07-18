const React = require('react');
const SessionStore = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');
const hashHistory = require('react-router').hashHistory;
const ErrorStore = require('../stores/error_store.js');
const ErrorActions = require('../actions/error_actions.js');
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
        <div>
          <div className="login-errors" key={error}>{errors[error]}</div>
          <br/>
        </div>
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
    // <Modal style={modStyle} isOpen="true">
    return (
      <Modal style={modStyle} isOpen={this.props.isOpen}>
        <div>

        <h2>Log In</h2>
        <br/>
        { this.handleErrors() }
          <form className="login" onSubmit={this.loggingIn}>

          <div className="login-email">
            <label name="email">Email: </label>
            <input type="text" id="email" value={this.state.email}
              onChange={this.update("email")}></input>

          </div>

          <div className="login-password">
            <label name="password">Password: </label>
            <input type="password" id="password" value={this.state.password}
              onChange={this.update("password")}></input>

          </div>

          <div className="submit-button">
            <input type="submit" value="Submit"></input>
          </div>

          </form>

          <div className="cancel-button">
            <button type="cancel" onClick={this.props.closeForm}>Cancel</button>
          </div>
        </div>
      </Modal>
    );
  }
});

module.exports = LoginForm;
