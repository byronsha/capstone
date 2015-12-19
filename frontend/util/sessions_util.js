var SessionActions = require('../actions/session_actions.js'),
    UiActions = require('../actions/ui_actions.js');

var SessionsUtil = {
  signup: function (signupParams) {
    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: 'json',
      data: signupParams,
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
        UiActions.removeFlash();
      },
      error: function (data) {
        UiActions.setFlash($.parseJSON(data.responseText).errors);
      }
    });
  },
  login: function (loginParams) {
    $.ajax({
      url: '/session',
      type: 'POST',
      dataType: 'json',
      data: loginParams,
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
        UiActions.removeFlash();
      },
      error: function (data) {
        UiActions.setFlash($.parseJSON(data.responseText).errors);
      }
    });
  },
  logout: function () {
    $.ajax({
      url: "/session",
      type: "DELETE",
      success: function (currentUser) {
        SessionActions.logoutCurrentUser(currentUser);
      }
    });
  }
};

module.exports = SessionsUtil;
