var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    UiConstants = require('../constants/ui_constants.js'),
    UiStore = new Store(AppDispatcher);

var _flash = "";

var setFlash = function (messages) {
  _flash = messages;
};

var removeFlash = function () {
  _flash = "";
};

UiStore.flash = function () {
  return _flash;
};

UiStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UiConstants.SET_FLASH:
      setFlash(payload.messages);
      UiStore.__emitChange();
      break;
    case UiConstants.REMOVE_FLASH:
      removeFlash();
      UiStore.__emitChange();
      break;
  }
  // UiStore.__emitChange();
}

module.exports = UiStore;
