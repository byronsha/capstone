var ApiActions = require('../actions/api_actions.js'),
    UiActions = require('../actions/ui_actions.js'),
    SessionActions = require('../actions/session_actions.js'),
    FavoriteActions = require('../actions/favorite_actions.js'),
    FollowingActions = require('../actions/following_actions.js'),
    CollectionStore = require('../stores/collection_store.js');

var ApiUtil = {
  fetchAllPhotos: function () {
    $.ajax({
      url: 'api/photos',
      success: function (photos) {
        ApiActions.receiveAllPhotos(photos);
      }
    })
  },
  fetchUserPhotos: function (userId) {
    $.ajax({
      url: 'api/photos',
      data: { userId: userId },
      success: function (photos) {
        ApiActions.receiveAllPhotos(photos);
      }
    })
  },
  fetchPhotoComments: function (photoId) {
    $.ajax({
      url: 'api/photo_comments/' + photoId,
      success: function (comments) {
        ApiActions.receivePhotoComments(comments);
      }
    })
  },
  createPhoto: function (photoParams) {
    $.ajax({
      url: 'api/photos',
      type: 'POST',
      dataType: 'json',
      data: photoParams,
      success: function (photo) {
        ApiActions.receiveAllPhotos([photo]);
      }
    })
  },
  deletePhoto: function (photoId) {
    $.ajax({
      url: 'api/photos/' + photoId,
      type: 'DELETE',
      dataType: 'json',
      success: function (photo) {
        ApiActions.deletePhoto(photo);
      }
    })
  },
  createComment: function (commentParams) {
    $.ajax({
      url: 'api/photo_comments',
      type: 'POST',
      dataType: 'json',
      data: commentParams,
      success: function (comment) {
        ApiActions.createComment(comment);
      }
    })
  },
  deleteComment: function (commentId) {
    $.ajax({
      url: 'api/photo_comments/' + commentId,
      type: 'DELETE',
      dataType: 'json',
      success: function (comment) {
        ApiActions.deleteComment(comment);
      }
    })
  },
  fetchSingleUser: function (userId) {
    $.ajax({
      url: 'api/users/' + userId,
      dataType: 'json',
      success: function (user) {
        ApiActions.receiveSingleUser(user);
      }
    })
  },
  fetchCurrentUser: function (userId) {
    $.ajax({
      url: '/api/users/' + userId,
      type: 'GET',
      success: function (user) {
        SessionActions.receiveCurrentUser(user);
      }
    })
  },
  fetchUserFavorites: function (userId) {
    $.ajax({
      url: 'api/favorites',
      data: { userId: userId },
      success: function (favorites) {
        ApiActions.receiveUserFavorites(favorites);
      }
    })
  },
  clearFavorites: function () {
    ApiActions.clearFavorites();
  },
  addFavorite: function (favoriteParams) {
    $.ajax({
      url: 'api/favorites',
      type: 'POST',
      dataType: 'json',
      data: favoriteParams,
      success: function (favorite) {
        FavoriteActions.addFavorite(favorite);
      }
    })
  },
  removeFavorite: function (favoriteId) {
    $.ajax({
      url: 'api/favorites/' + favoriteId,
      type: 'DELETE',
      dataType: 'json',
      success: function (favorite) {
        FavoriteActions.removeFavorite(favorite);
      }
    })
  },
  fetchUserFollowings: function (followerId) {
    $.ajax({
      url: 'api/followings',
      data: { followerId: followerId },
      success: function (followings) {
        ApiActions.receiveUserFollowings(followings);
      }
    })
  },
  clearFollowings: function () {
    ApiActions.clearFollowings();
  },
  addFollowing: function (followingParams) {
    $.ajax({
      url: 'api/followings',
      type: 'POST',
      dataType: 'json',
      data: followingParams,
      success: function (following) {
        FollowingActions.addFollowing(following);
      }
    })
  },
  removeFollowing: function (followingId) {
    $.ajax({
      url: 'api/followings/' + followingId,
      type: 'DELETE',
      dataType: 'json',
      success: function (following) {
        FollowingActions.removeFollowing(following);
      }
    })
  }
};

module.exports = ApiUtil;
