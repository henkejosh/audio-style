const React = require('react');
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');

const UserPage = React.createClass({
  getInitialState: function() {
    return { currentUser: SessionStore.currentUser()};
  },
  render: function() {
    return (
      <figure className="user-page-content">
        <span className="user-pics">
          <img src="http://f.cl.ly/items/3Q0L46442f23151C1d0j/Sun%20on%20Blue%20Sky%20Vector%20Background.jpg"
            className="background-image"/>
          <img className="profile-pic"/>
          <div className="username-display">{this.state.currentUser.email}</div>
          <div className="upload-image-button"/>
        </span>

        <section className="profile-body">
          <nav className="user-nav-bar">
            <ul>
              <a href="#">Tracks</a>
              <a href="#">Playlists</a>
              <a href="#">Albums</a>
            </ul>
          </nav>

          <span className="hold-body-boxes">

            <div className="nav-body-stuff">
              list tracks or whatever is rendered from the profile nav bar
            </div>

            <div className="user-info-stuff">
              List other info here? Recently played tracks by ffriends
              or comments or something
            </div>

          </span>

        </section>
      </figure>
    );
  }
});

module.exports = UserPage;
