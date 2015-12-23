var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    CollectionConstants = require('../constants/collection_constants.js'),
    CollectionStore = new Store(AppDispatcher);

var _collection = "All";

var updateCollection = function (collection) {
  _collection = collection;
};

CollectionStore.currentCollection = function () {
  return _collection;
};

CollectionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case CollectionConstants.UPDATE_COLLECTION:
      updateCollection(payload.collection);
      CollectionStore.__emitChange();
      break;
  }
  // CollectionStore.__emitChange();
}

module.exports = CollectionStore;
