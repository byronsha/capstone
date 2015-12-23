var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    FavoriteConstants = require('../constants/favorite_constants.js'),
    FavoriteStore = new Store(AppDispatcher);

var _favorites = [];

var resetFavorites = function (favorites) {
  // var lookup = {};
  // for (var i = 0, len = favorites.length; i < len; i++) {
  //   lookup[favorites[i].id] = favorites[i];
  // };
  // _favorites = lookup;
  _favorites = favorites;
};

var clearFavorites = function () {
  _favorites = [];
};

FavoriteStore.all = function () {
  return _favorites;
};

FavoriteStore.isFavorited = function (photoId) {
  var favorited = false;
  for (var i = 0; i < _favorites.length; i++) {
    if (_favorites[i].photo_id == photoId) {
      console.log("asdasd")
      favorited = true;
    }
  }
  return favorited;
};

FavoriteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FavoriteConstants.USER_FAVORITES_RECEIVED:
      resetFavorites(payload.favorites);
      FavoriteStore.__emitChange();
      break;
    case FavoriteConstants.CLEAR_FAVORITES:
      clearFavorites();
      FavoriteStore.__emitChange();
      break;
  }

  FavoriteStore.__emitChange();
}

module.exports = FavoriteStore;
