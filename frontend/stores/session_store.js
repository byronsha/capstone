var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    SessionConstants = require('../constants/session_constants.js'),
    SessionStore = new Store(AppDispatcher);

var _currentUser = {};

var setCurrentUser = function (user) {
  _currentUser = user;
};

SessionStore.currentUser = function () {
  return _currentUser;
};

SessionStore.currentUserId = function () {
  return _currentUser.id;
};

SessionStore.isLoggedIn = function () {
  return !!_currentUser.id;
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      setCurrentUser(payload.currentUser);
      SessionStore.__emitChange();
      break;
  }
  // SessionStore.__emitChange();
}

module.exports = SessionStore;
