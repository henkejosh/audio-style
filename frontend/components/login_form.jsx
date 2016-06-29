const React = require('react');
const SessionStore = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');

const LoginForm = React.createClass({
  getInitialState: function() {
    return { email: "", password: "" }
  },

  componentDidMount: function() {
    SessionStore.addListener(this.isUserLoggedIn);
  },

  isUserLoggedIn: function() {
    if(SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  update: function(prop) {
    return (e) => {
      this.setState({
        [prop]: e.target.value
      });
    }
  },

  loggingIn: function(event) {
    event.preventDefault();
    SessionActions.login(this.state);
  },

  render: function() {
    return (
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
    );
  }
});

module.exports = LoginForm;
