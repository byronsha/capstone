var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    FavoriteConstants = require('../constants/favorite_constants.js'),
    FavoriteStore = new Store(AppDispatcher);

var _favorites = [];

var resetFavorites = function (favorites) {
  _favorites = favorites;
};

// var removeFavorite = function (favorite) {
//   for (var i = 0; i < _favorites.length; i++) {
//     if (_favorites[i].id === favorite.id) {
//       _favorites.splice(i, 1);
//     }
//   }
// };

FavoriteStore.all = function () {
  return _favorites.slice();
};

FavoriteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FavoriteConstants.USER_FAVORITES_RECEIVED:
      resetFavorites(payload.favorites);
      FavoriteStore.__emitChange();
      break;
    case FavoriteConstants.CLEAR_FAVORITES:
      resetFavorites([]);
      FavoriteStore.__emitChange();
      break;
  }

  FavoriteStore.__emitChange();
}

module.exports = FavoriteStore;
