var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    CollectionConstants = require('../constants/collection_constants.js'),
    CollectionStore = new Store(AppDispatcher);

var _collections = [];

var updateCollections = function (collections) {
  _collections = collections;
};

CollectionStore.all = function () {
  return _collections.slice();
};

CollectionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case CollectionConstants.UPDATE_COLLECTIONS:
      updateCollections(payload.collections);
      break;
  }

  CollectionStore.__emitChange();
}

module.exports = CollectionStore;
