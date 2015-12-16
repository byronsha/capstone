var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchAllPhotos: function () {
    $.ajax({
      url: "api/photos",
      success: function (photos) {
        ApiActions.receiveAllPhotos(photos);
      }
    })
  }
};

module.exports = ApiUtil;
