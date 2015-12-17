var Dispatcher = require('../dispatcher/dispatcher.js');
var CollectionConstants = require('../constants/collection_constants.js');

var CollectionActions = {
  updateCollections: function (collections) {
    Dispatcher.dispatch({
      actionType: CollectionConstants.UPDATE_COLLECTIONS,
      collections: collections
    });
  },
  receiveAllCollections: function (collections) {
    Dispatcher.dispatch({
      actionType: CollectionConstants.RECEIVE_ALL_COLLECTIONS,
      collections: collections
    });
  }
}

module.exports = CollectionActions;
