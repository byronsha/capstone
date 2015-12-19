var Dispatcher = require('../dispatcher/dispatcher.js'),
    SessionConstants = require('../constants/session_constants.js');

var SessionActions = {
  receiveCurrentUser: function (currentUser) {
    Dispatcher.dispatch({
      actionType: SessionConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
    console.log(currentUser);
  },
  logoutCurrentUser: function () {
    Dispatcher.dispatch({
      actionType: SessionConstants.RECEIVE_CURRENT_USER,
      currentUser: {}
    });
    console.log("logged out");
  }
}

module.exports = SessionActions;
