var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    SessionStore = require('../../stores/session_store.js'),
    FavoriteStore = require('../../stores/favorite_store.js');

var UnfavoriteButton = React.createClass({
  unfavoritePhoto: function (e) {
    e.stopPropagation();

    var favoriteId = FavoriteStore.findFavoriteId(SessionStore.currentUserId(), this.props.photoId);

    ApiUtil.removeFavorite(favoriteId);
    this.props.decrementFavoriteCount();
  },
  render: function () {
    return (
      <span className="favorite"
            onClick={this.unfavoritePhoto}>
            <i className="fa fa-heart faa-pulse animated-hover" id="photo-unfavorite-button"></i>
      </span>
    );
  }
});

module.exports = UnfavoriteButton;
