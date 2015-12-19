var Dispatcher = require('../dispatcher/dispatcher.js'),
    UiConstants = require('../constants/ui_constants.js');

var UiActions = {
  setFlash: function (messages) {
    Dispatcher.dispatch({
      actionType: UiConstants.SET_FLASH,
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
