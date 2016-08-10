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
const CurrentSongActions = require('./actions/current_song_actions.js');
const CurrentSongStore = require('./stores/current_song_store.js');
const UserPage = require('./components/user_page.jsx');
const SongDetail = require('./components/song_detail.jsx');
const NewSongIndex = require('./components/new_song_index.jsx');
const AudioApiPlayerActions = require('./actions/audio_api_player_actions.js');
const AudioApiPlayerStore = require('./stores/audio_api_player_store.js');
const HomePage = require('./components/home.jsx');
//Router
const reactRouter = require('react-router');
const Router = reactRouter.Router;
const hashHistory = reactRouter.hashHistory;
const Route = reactRouter.Route;
const IndexRoute = reactRouter.IndexRoute;
// new stuff
const FinalSongIndex = require('./components/final_song_index.jsx');
const FinalSongIndexItem = require('./components/final_song_index_item.jsx');

const _ensureLoggedIn = function(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    // replace('/login');
    replace('/');
  }
};

const chain = function(cb1, cb2){
  cb1.call();
  cb2.call();
};
// <Route path="/songs" component={ NewSongIndex } onEnter={ _ensureLoggedIn }/>
// <Route path="/newsongs" component={ NewSongIndex } />

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={ HomePage } />
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ SignupForm } />

      <Route path="/songs" component={ FinalSongIndex } onEnter={ _ensureLoggedIn }/>
      <Route path="/newsongs" component={ NewSongIndex } />
      <Route path="/songs/:songID" component={ SongDetail } onEnter={ _ensureLoggedIn }/>
      <Route path="/user" component= { UserPage } onEnter={ _ensureLoggedIn }/>
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

window.CurrentSongStore = CurrentSongStore;
window.CommentStore = CommentStore;
window.AudioApiPlayerActions = AudioApiPlayerActions;
window.AudioApiPlayerStore = AudioApiPlayerStore;
