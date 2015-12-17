var ApiActions = require('../actions/api_actions.js'),
    CollectionActions = require('../actions/collection_actions.js'),
    CollectionStore = require('../stores/collection_store.js');

var ApiUtil = {
  fetchAllPhotos: function () {
    var collections = CollectionStore.all();
    $.ajax({
      url: "api/photos",
      data: { collections: collections },
      success: function (photos) {
        ApiActions.receiveAllPhotos(photos);
      }
    })
  }
};

module.exports = ApiUtil;
