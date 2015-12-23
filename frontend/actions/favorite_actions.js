var Dispatcher = require('../dispatcher/dispatcher.js'),
    FavoriteConstants = require('../constants/favorite_constants.js');

var FavoriteActions = {
  addFavorite: function (favorite) {
    Dispatcher.dispatch({
      actionType: FavoriteConstants.ADD_FAVORITE,
      favorite: favorite
    });
  },
  removeFavorite: function (favorite) {
    Dispatcher.dispatch({
      actionType: FavoriteConstants.REMOVE_FAVORITE,
      favorite: favorite
    });
  }
}

module.exports = FavoriteActions;
