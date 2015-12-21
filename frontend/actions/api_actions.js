var Dispatcher = require('../dispatcher/dispatcher.js'),
    PhotoConstants = require('../constants/photo_constants.js'),
    CommentConstants = require('../constants/comment_constants.js');

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
  }
  // createPhoto: function (photo) {
  //   Dispatcher.dispatch({
  //     actionType: PhotoConstants.CREATE_PHOTO,
  //     photo: photo
  //   });
  // },

};

module.exports = ApiActions;
