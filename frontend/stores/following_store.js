var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    FollowingConstants = require('../constants/following_constants.js'),
    FollowingStore = new Store(AppDispatcher);

var _followings = [];

var resetFollowings = function (followings) {
  _followings = followings;
};

var clearFollowings = function () {
  _followings = [];
};

var addFollowing = function (following) {
  _followings.push(following);
};

var removeFollowing = function (following) {
  for (var i = 0; i < _followings.length; i++) {
    if (_followings[i].id == following.id) {
      _followings.splice(i, 1);
    }
  }
};

FollowingStore.all = function () {
  return _followings;
};

FollowingStore.isFollowing = function (followedId) {
  var followed = false;
  for (var i = 0; i < _followings.length; i++) {
    if (_followings[i].followed_id == followedId) {
      followed = true;
    }
  }
  return followed;
};

FollowingStore.findFollowingId = function (followerId, followedId) {
  for (var i = 0; i < _followings.length; i++) {
    if (_followings[i].follower_id == followerId && _followings[i].followed_id == followedId) {
      return _followings[i].id
    }
  }
};

FollowingStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FollowingConstants.USER_FOLLOWINGS_RECEIVED:
      resetFollowings(payload.followings);
      FollowingStore.__emitChange();
      break;
    case FollowingConstants.CLEAR_FOLLOWINGS:
      clearFollowings();
      FollowingStore.__emitChange();
      break;
    case FollowingConstants.ADD_FOLLOWING:
      addFollowing(payload.following);
      FollowingStore.__emitChange();
      break;
    case FollowingConstants.REMOVE_FOLLOWING:
      removeFollowing(payload.following);
      FollowingStore.__emitChange();
      break;
  }
}

module.exports = FollowingStore;
