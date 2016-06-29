const React = require('react');
const ReactDOM = require('react-dom');
const SessionApiUtil = require('./util/session_api_util.js');
const SessionActions = require('./actions/session_actions.js');
const SessionStore = require('./stores/session_store.js');
const LoginForm = require('./components/login_form.jsx');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<LoginForm/>,
    document.getElementById("root"))
});

// window.SessionActions = SessionActions;
// window.SessionStore = SessionStore;
