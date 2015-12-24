var Dispatcher = require('../dispatcher/dispatcher.js'),
    PhotoConstants = require('../constants/photo_constants.js'),
    CommentConstants = require('../constants/comment_constants.js'),
    FavoriteConstants = require('../constants/favorite_constants.js'),
    FollowingConstants = require('../constants/following_constants.js'),
    UserConstants = require('../constants/user_constants.js');

var ApiActions = {
  receiveAllPhotos: function (photos) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.ALL_PHOTOS_RECEIVED,
      photos: photos
    });
  },
  receivePhotoComments: function (comments) {
    Dispatcher.dispatch({
      actionType: CommentConstants.PHOTO_COMMENTS_RECEIVED,
      comments: comments
    });
  },
  createComment: function (comment) {
    Dispatcher.dispatch({
      actionType: CommentConstants.CREATE_COMMENT,
      comment: comment
    })
  },
  deletePhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.DELETE_PHOTO,
      photo: photo
    })
  },
  deleteComment: function (comment) {
    Dispatcher.dispatch({
      actionType: CommentConstants.DELETE_COMMENT,
      comment: comment
    })
  },
  receiveSingleUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_SINGLE_USER,
      user: user
    })
  },
  receiveUserFavorites: function (favorites) {
    Dispatcher.dispatch({
      actionType: FavoriteConstants.USER_FAVORITES_RECEIVED,
      favorites: favorites
    })
  },
  clearFavorites: function () {
    Dispatcher.dispatch({
      actionType: FavoriteConstants.CLEAR_FAVORITES
    })
  },
  receiveUserFollowings: function (followings) {
    Dispatcher.dispatch({
      actionType: FollowingConstants.USER_FOLLOWINGS_RECEIVED,
      followings: followings
    })
  },
  clearFollowings: function () {
    Dispatcher.dispatch({
      actionType: FollowingConstants.CLEAR_FAVORITES
    })
  }
};

module.exports = ApiActions;
