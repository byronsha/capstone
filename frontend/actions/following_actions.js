var Dispatcher = require('../dispatcher/dispatcher.js'),
    FollowingConstants = require('../constants/following_constants.js');

var FollowingActions = {
  addFollowing: function (following) {
    Dispatcher.dispatch({
      actionType: FollowingConstants.ADD_FOLLOWING,
      following: following
    });
  },
  removeFollowing: function (following) {
    Dispatcher.dispatch({
      actionType: FollowingConstants.REMOVE_FOLLOWING,
      following: following
    });
  }
}

module.exports = FollowingActions;
