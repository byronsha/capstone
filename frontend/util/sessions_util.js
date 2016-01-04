var SessionActions = require('../actions/session_actions.js'),
    UiActions = require('../actions/ui_actions.js'),
    ApiUtil = require('./api_util.js');

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
        window.currentUserId = currentUser.id;
      },
      error: function (data) {
        UiActions.setSignupFlash($.parseJSON(data.responseText).errors);
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
        ApiUtil.fetchUserFavorites(currentUser.id);
        ApiUtil.fetchUserFollowings(currentUser.id);
        window.currentUserId = currentUser.id;
      },
      error: function (data) {
        UiActions.setLoginFlash($.parseJSON(data.responseText).errors);
      }
    });
  },
  logout: function () {
    $.ajax({
      url: "/session",
      type: "DELETE",
      success: function (currentUser) {
        SessionActions.logoutCurrentUser(currentUser);
        ApiUtil.clearFavorites();
        ApiUtil.clearFollowings();
        window.currentUserId = null;
      }
    });
  }
};

module.exports = SessionsUtil;
