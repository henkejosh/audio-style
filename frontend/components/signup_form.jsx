const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');
const ErrorStore = require('../stores/error_store.js');
const ErrorActions = require('../actions/error_actions.js');
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
      hashHistory.push(`/songs`);
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
      <Modal style={modStyle} isOpen={this.props.isOpen}>
        <div>
          <h2>Sign Up</h2>
          <br/>

          <form className="signup" onSubmit={this.signingUp}>

          <div className="signup-email">
            <label name="email">Email: </label>
            <input type="text" id="email" value={this.state.email}
              onChange={this.update("email")}></input>

            <div className="signup-errors">{this.getErrors("email")}</div>
          </div>

          <div className="signup-password">
            <label name="password">Password: </label>
            <input type="password" id="password" value={this.state.password}
              onChange={this.update("password")}></input>

            <div className="signup-errors">{this.getErrors("password")}</div>
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

module.exports = SignupForm;
