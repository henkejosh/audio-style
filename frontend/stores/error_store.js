"use strict";

const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const ErrorConstants = require('../constants/error_constants.js');

let _errors = {};
let _form = "";

const ErrorStore = new Store(Dispatcher);

ErrorStore.formErrors = function(form) {
  if(form === _form) {
    return Object.assign({}, _errors);
  }
};

ErrorStore.form = function() {
  return Object.assign("", _form);
};

const setErrors = function(payload) {
  _form = payload.form;
  _errors = payload.errors;
  ErrorStore.__emitChange();
};

const clearErrors = function() {
  _form = "";
  _errors = {};
  ErrorStore.__emitChange();
};

ErrorStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      setErrors(payload);
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      break;
  }
};

module.exports = ErrorStore;
