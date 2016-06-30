debugger;
const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SessionApiUtil = require('../util/session_api_util.js');
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');
const Modal = require('react-modal');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const App = React.createClass({
  getInitialState: function() {
   return { signUpIsOpen: false };
 },

 openSignUpForm: function() {
   this.setState({signUpIsOpen: true});
 },

 afterOpenSignUpForm: function() {
   // references are now sync'd and can be accessed.
   this.refs.subtitle.style.color = '#f00';
 },

 closeSignUpForm: function() {
   this.setState({signUpIsOpen: false});
 },

  render: function() {
    return (
      <div>
        Home Page will go here

        <button onClick={this.openSignUpForm}>Sign Up!</button>
        <Modal
          isOpen={this.state.signUpIsOpen}
          onAfterOpen={this.afterOpenSignUpForm}
          onRequestClose={this.closeSignUpForm}
        >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeSignUpForm}>close</button>
          <div>I am a modal</div>
        </modal>
      </div>
    );
  }
});

module.exports = App;
