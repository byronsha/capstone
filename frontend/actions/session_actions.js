var Dispatcher = require('../dispatcher/dispatcher.js'),
    SessionConstants = require('../constants/session_constants.js'),
    ApiUtil = require('../util/api_util.js');

var SessionActions = {
  receiveCurrentUser: function (currentUser) {
    Dispatcher.dispatch({
      actionType: SessionConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    })
  },
  logoutCurrentUser: function () {
    Dispatcher.dispatch({
      actionType: SessionConstants.RECEIVE_CURRENT_USER,
      currentUser: {}
    })
  }
}

module.exports = SessionActions;
