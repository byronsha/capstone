var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    UiConstants = require('../constants/ui_constants.js'),
    UiStore = new Store(AppDispatcher);

var _loginFlash = "";
var _signupFlash = "";

var setLoginFlash = function (messages) {
  _loginFlash = messages;
};

var setSignupFlash = function (messages) {
  _signupFlash = messages;
};

var removeFlash = function () {
  _loginFlash = "";
  _signupFlash = "";
};

UiStore.loginFlash = function () {
  return _loginFlash;
};

UiStore.signupFlash = function () {
  return _signupFlash;
};

UiStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UiConstants.SET_LOGIN_FLASH:
      setLoginFlash(payload.messages);
      UiStore.__emitChange();
      break;
    case UiConstants.SET_SIGNUP_FLASH:
      setSignupFlash(payload.messages);
      UiStore.__emitChange();
      break;
    case UiConstants.REMOVE_FLASH:
      removeFlash();
      UiStore.__emitChange();
      break;
  }
}

module.exports = UiStore;
