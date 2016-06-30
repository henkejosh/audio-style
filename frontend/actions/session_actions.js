const Dispatcher = require('../dispatcher/dispatcher.js');
const SessionApiUtil = require('../util/session_api_util');
const SessionConstants = require('../constants/session_constants.js');
const ErrorActions = require('./error_actions.js');

const SessionActions = {
  signup: function(params) {
    SessionApiUtil.signup(params, SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  login: function(params) {
    SessionApiUtil.login(params, SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logout: function(params) {
    SessionApiUtil.logout(params, SessionActions.removeCurrentUser,
      ErrorActions.setErrors);
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
