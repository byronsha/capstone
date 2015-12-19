var Dispatcher = require('../dispatcher/dispatcher.js');
var PhotoConstants = require('../constants/photo_constants.js');

var ApiActions = {
  receiveAllPhotos: function (photos) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.ALL_PHOTOS_RECEIVED,
      photos: photos
    });
  },
  createPhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.CREATE_PHOTO,
      photo: photo
    });
  }
};

module.exports = ApiActions;
