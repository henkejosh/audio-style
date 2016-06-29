const Dispatcher = require('../dispatcher/dispatcher.js');
const SessionApiUtil = require('../util/session_api_util');
const SessionConstants = require('../constants/constants.js');

const SessionActions = {
  signup: function(params) {
    SessionApiUtil.signup(params, SessionActions.receiveCurrentUser);
  },

  login: function(params) {
    SessionApiUtil.login(params, SessionActions.receiveCurrentUser);
  },

  logout: function(params) {
    SessionApiUtil.logout(params, SessionActions.removeCurrentUser);
  },

  receiveCurrentUser: function(user) {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: user
    });
  },

  removeCurrentUser: function(user) {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
      currentUser: user
    });
  }
};

module.exports = SessionActions;
