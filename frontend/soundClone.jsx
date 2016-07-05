const React = require('react');
const ReactDOM = require('react-dom');
const SessionApiUtil = require('./util/session_api_util.js');
const SessionActions = require('./actions/session_actions.js');
const SessionStore = require('./stores/session_store.js');
const LoginForm = require('./components/login_form.jsx');
const SignupForm = require('./components/signup_form.jsx');
const App = require('./components/app.jsx');
const SongIndex = require('./components/song_index.jsx');
const SongIndexItem = require('./components/song_index_item.jsx');
const Header = require('./components/header.jsx');
const SongActions = require('./actions/song_actions.js');
const SongStore = require('./stores/song_store.js');
const CommentActions = require('./actions/comment_actions.js');
const CommentStore = require('./stores/comment_store.js');
const AlbumActions = require('./actions/album_actions.js');
const CurrentSongStore = require('./stores/current_song_store.js');
//Router
const reactRouter = require('react-router');
const Router = reactRouter.Router;
const hashHistory = reactRouter.hashHistory;
const Route = reactRouter.Route;
const IndexRoute = reactRouter.IndexRoute;

const _ensureLoggedIn = function(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/');
  }
};

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ SignupForm } />
      <Route path="/songs" component={ SongIndex } onEnter={ _ensureLoggedIn }/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  ReactDOM.render(
    appRouter,
    document.getElementById("root"));
});

window.AlbumActions = AlbumActions;
