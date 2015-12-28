var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    UserConstants = require('../constants/user_constants.js'),
    UserStore = new Store(AppDispatcher);

var _user = {};

var resetUser = function (user) {
  _user = user;
};

UserStore.user = function () {
  return _user;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.RECEIVE_SINGLE_USER:
      resetUser(payload.user);
      UserStore.__emitChange();
      break;
  }
}

module.exports = UserStore;
