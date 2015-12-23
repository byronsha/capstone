var React = require('react'),
    SessionStore = require('../../stores/session_store.js'),
    ApiUtil = require('../../util/api_util.js');

var FavoriteButton = React.createClass({
  favoritePhoto: function (e) {
    e.stopPropagation();

    var favoriteParams = {
      favorite: {
        user_id: SessionStore.currentUserId(),
        photo_id: this.props.photoId,
      }
    };

    ApiUtil.addFavorite(favoriteParams);
    this.props.incrementFavoriteCount();
  },
  render: function () {
    return (
      <span className="favorite"
            onClick={this.favoritePhoto}>
            <i className="fa fa-heart-o faa-pulse animated-hover" id="photo-favorite-button"></i>
      </span>
    );
  }
});

module.exports = FavoriteButton;
