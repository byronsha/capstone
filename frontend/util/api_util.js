var ApiActions = require('../actions/api_actions.js'),
    UiActions = require('../actions/ui_actions.js'),
    CollectionStore = require('../stores/collection_store.js');

var ApiUtil = {
  fetchAllPhotos: function () {
    var collection = CollectionStore.currentCollection();
    $.ajax({
      url: 'api/photos',
      data: { collection: collection },
      success: function (photos) {
        ApiActions.receiveAllPhotos(photos);
      }
    })
  },
  createPhoto: function (photoParams) {
    $.ajax({
      url: 'api/photos',
      type: 'POST',
      dataType: 'json',
      data: photoParams,
      success: function (photo) {
        ApiActions.createPhoto(photo);
        // UiActions.removeFlash();
      },
      error: function (data) {
        console.log("create photo error")
        // UiActions.setFlash($.parseJSON(data.responseText).errors);
      }
    })
  }
};

module.exports = ApiUtil;
