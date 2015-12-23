var Dispatcher = require('../dispatcher/dispatcher.js'),
    CollectionConstants = require('../constants/collection_constants.js');

var CollectionActions = {
  updateCollection: function (collection) {
    Dispatcher.dispatch({
      actionType: CollectionConstants.UPDATE_COLLECTION,
      collection: collection
    });
  }
}

module.exports = CollectionActions;
