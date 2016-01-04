var Dispatcher = require('../dispatcher/dispatcher.js'),
    UiConstants = require('../constants/ui_constants.js');

var UiActions = {
  setLoginFlash: function (messages) {
    Dispatcher.dispatch({
      actionType: UiConstants.SET_LOGIN_FLASH,
      messages: messages
    });
  },
  setSignupFlash: function (messages) {
    Dispatcher.dispatch({
      actionType: UiConstants.SET_SIGNUP_FLASH,
      messages: messages
    });
  },
  removeFlash: function () {
    Dispatcher.dispatch({
      actionType: UiConstants.REMOVE_FLASH,
    });
  }
}

module.exports = UiActions;
