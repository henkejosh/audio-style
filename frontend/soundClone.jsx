const React = require('react');
const ReactDOM = require('react-dom');
const SessionApiUtil = require('./util/session_api_util.js');
const SessionActions = require('./actions/session_actions.js');
const SessionStore = require('./stores/session_store.js');
const LoginForm = require('./components/login_form.jsx');
//Router
import { hashHistory, Router, Route, IndexRoute } from 'react-router'

// need to update Route to "App" from "LoginForm" once it's created (below)
const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ LoginForm } />
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<LoginForm/>,
    document.getElementById("root"))
});

// window.SessionActions = SessionActions;
// window.SessionStore = SessionStore;
