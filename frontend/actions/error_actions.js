const Dispatcher = require('../dispatcher/dispatcher.js');
const ErrorConstants = require('../constants/error_constants.js');
const SessionApiUtil = require('../util/session_api_util');

const ErrorActions = {
  setErrors: function(form, errors) {

    Dispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors
    });
  },
  // error: errors.base[0]

  clearErrors: function() {
    Dispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  }
};

module.exports = ErrorActions;
