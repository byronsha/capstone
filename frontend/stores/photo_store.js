var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    PhotoConstants = require('../constants/photo_constants.js'),
    PhotoStore = new Store(AppDispatcher);

var _photos = [];

var resetPhotos = function (photos) {
  _photos = photos;
};

var deletePhoto = function (photo) {
  for (var i = 0; i < _photos.length; i++) {
    if (_photos[i].id === photo.id) {
      _photos.splice(i, 1);
    }
  }
};

PhotoStore.all = function () {
  return _photos.slice();
};

PhotoStore.find = function (id) {
  return _photos.slice().filter(function (photo) {
    return photo.id === parseInt(id);
  })[0];
};

PhotoStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PhotoConstants.ALL_PHOTOS_RECEIVED:
      resetPhotos(payload.photos);
      PhotoStore.__emitChange();
      break;
    case PhotoConstants.DELETE_PHOTO:
      deletePhoto(payload.photo);
      PhotoStore.__emitChange();
      break;
  }

  PhotoStore.__emitChange();
}

module.exports = PhotoStore;
