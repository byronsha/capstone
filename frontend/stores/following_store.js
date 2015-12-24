var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    FollowingConstants = require('../constants/following_constants.js'),
    FollowingStore = new Store(AppDispatcher);

var _followings = [];

var resetFollowings = function (followings) {
  _followings = followings;
};

FollowingStore.all = function () {
  return _followings;
};

// FollowingStore.isFavorited = function (photoId) {
//   var favorited = false;
//   for (var i = 0; i < _favorites.length; i++) {
//     if (_favorites[i].photo_id == photoId) {
//       favorited = true;
//     }
//   }
//   return favorited;
// };
//
// FollowingStore.findFavoriteId = function (userId, photoId) {
//   for (var i = 0; i < _favorites.length; i++) {
//     if (_favorites[i].user_id == userId && _favorites[i].photo_id == photoId) {
//       return _favorites[i].id
//     }
//   }
// };

FollowingStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FollowingConstants.USER_FOLLOWINGS_RECEIVED:
      resetFollowings(payload.followings);
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
