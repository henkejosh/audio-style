const React = require('react');
const ReactDOM = require('react-dom');
const SessionApiUtil = require('./util/session_api_util.js');
const SessionActions = require('./actions/session_actions.js');
const SessionStore = require('./stores/session_store.js');
const LoginForm = require('./components/login_form.jsx');
const SignupForm = require('./components/signup_form.jsx');
const App = require('./components/app.jsx');
const Navbar = require('./components/navbar.jsx');
const SongIndex = require('./components/song_index.jsx');
//Router
const reactRouter = require('react-router');
const Router = reactRouter.Router;
const hashHistory = reactRouter.hashHistory;
const Route = reactRouter.Route;
const IndexRoute = reactRouter.IndexRoute;

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <Route path="/signup" component={ SignupForm } />
      <Route path="/login" component={ LoginForm } />
      <Route path="/songs" component={ SongIndex } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(
    appRouter,
    document.getElementById("root"));
});

// window.SessionActions = SessionActions;
// window.SessionStore = SessionStore;
