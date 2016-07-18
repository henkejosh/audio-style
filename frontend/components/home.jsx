const React = require('react');
const reactRouter = require('react-router');
const hashHistory = reactRouter.hashHistory;
const LoginForm = require('./login_form.jsx');
const SessionStore = require('../stores/session_store.js');
const HomeAuthModal = require('./home_auth_modal.jsx');

const HomePage = React.createClass({
  getInitialState: function() {
   return { authIsOpen: false };
 },

  goToSongs: function() {
    if(!SessionStore.isUserLoggedIn() ) {
      this.setState({ authIsOpen: true });
    } else {
      hashHistory.push("/songs");
    }
  },

  render: function() {
    return(
      <div className="home-page">
        <HomeAuthModal isOpen={this.state.authIsOpen} />

        <img className="home-album-pic" onClick={this.goToSongs}
          src="https://res.cloudinary.com/dg2yejdpt/image/upload/v1467739480/a_-_Front_lscrcq.jpg"/>
      </div>
    );
  }
});

module.exports = HomePage;
