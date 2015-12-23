var ApiActions = require('../actions/api_actions.js'),
    UiActions = require('../actions/ui_actions.js'),
    SessionActions = require('../actions/session_actions.js'),
    CollectionStore = require('../stores/collection_store.js');

var ApiUtil = {
  fetchAllPhotos: function () {
    var collection = CollectionStore.currentCollection();
    $.ajax({
      url: 'api/photos',
      data: { collection: collection },
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
        // ApiActions.createPhoto(photo);
        // UiActions.removeFlash();
      },
      error: function (data) {
        console.log(data);
        console.log("create photo error");
        // UiActions.setFlash($.parseJSON(data.responseText).errors);
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
        // UiActions.removeFlash();
      },
      error: function (data) {
        console.log(data);
        console.log("create photo error");
        // UiActions.setFlash($.parseJSON(data.responseText).errors);
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
      url: "/api/users/" + userId,
      type: "GET",
      success: function (user) {
        SessionActions.receiveCurrentUser(user);
      }
    })
  },
  fetchUserFavorites: function (userId) {
    $.ajax({
      url: "api/favorites",
      data: { userId: userId },
      success: function (favorites) {
        ApiActions.receiveUserFavorites(favorites);
      }
    })
  },
  clearFavorites: function () {
    ApiActions.clearFavorites();
  }
};

module.exports = ApiUtil;
