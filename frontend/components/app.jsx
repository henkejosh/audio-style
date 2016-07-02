const React = require('react');
const SessionApiUtil = require('../util/session_api_util.js');
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');
const Modal = require('react-modal');
const Header = require('./header.jsx');
const Router = require('react-router').Router;
const hashHistory = require('react-router').hashHistory;
const SongIndex = require('./song_index.jsx');

const App = React.createClass({

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this.isUserLoggedIn);
  },

  isUserLoggedIn: function() {
    if(SessionStore.isUserLoggedIn()) {
      hashHistory.push(`/songs`);
    }
  },

 componentWillMount() {
    Modal.setAppElement(document.getElementById("root"));
 },

  render: function() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
