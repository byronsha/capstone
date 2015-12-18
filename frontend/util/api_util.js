var ApiActions = require('../actions/api_actions.js'),
    CollectionStore = require('../stores/collection_store.js');

var ApiUtil = {
  fetchAllPhotos: function () {
    var collection = CollectionStore.currentCollection();
    $.ajax({
      url: "api/photos",
      data: { collection: collection },
      success: function (photos) {
        ApiActions.receiveAllPhotos(photos);
      }
    })
  }
};

module.exports = ApiUtil;
