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
  preventClick: function (e) {
    e.stopPropagation();
  },
  render: function () {
    if (SessionStore.isLoggedIn()) {
      return (
        <span className="favorite"
              onClick={this.favoritePhoto}>
              <i className="fa fa-heart-o faa-pulse animated-hover" id="photo-favorite-button"></i>
        </span>
      )
    } else {
      return (
        <span className="favorite"
              onClick={this.preventClick}>
              <i className="fa fa-heart-o"
                 id="photo-favorite-button-ghost">
                 <div className={this.props.tooltip}>
                   <span className="favorite-tooltip">Log in to favorite</span>
                 </div>
              </i>
        </span>
      )
    }
  }
});

module.exports = FavoriteButton;
