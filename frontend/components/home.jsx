const React = require('react');
const reactRouter = require('react-router');
const hashHistory = reactRouter.hashHistory;
const LoginForm = require('./login_form.jsx');
const SessionStore = require('../stores/session_store.js');
const HomeAuthModal = require('./home_auth_modal.jsx');
const modStyle = require('./modal_styles.js');
const Modal = require('react-modal');

const HomePage = React.createClass({
  getInitialState: function() {
   return { authIsOpen: false };
 },

  goToSongs: function() {
    if(!SessionStore.isUserLoggedIn() ) {
      this.setState({ authIsOpen: true });
      // this.forceUpdate();
      // hashHistory.push("/login");
    } else {
      hashHistory.push("/songs");
    }
  },

  cancelOut: function() {
    this.setState({ authIsOpen: false });
  },

  openAuthModal: function() {
    if( this.state.authIsOpen ) {
      return <HomeAuthModal cancelOut={this.cancelOut}
        isOpen={this.state.authIsOpen}/>;
    }
  },

  render: function() {
    return(
      <div className="home-page">
      {this.openAuthModal()}

        <img className="home-album-pic" onClick={this.goToSongs}
          src="https://res.cloudinary.com/dg2yejdpt/image/upload/v1467739480/a_-_Front_lscrcq.jpg"/>
      </div>
    );
  }
});

module.exports = HomePage;
