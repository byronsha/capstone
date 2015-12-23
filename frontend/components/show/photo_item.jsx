var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    SessionStore = require('../../stores/session_store.js'),
    FavoriteStore = require('../../stores/favorite_store.js'),
    FavoriteButton = require('../favorites/favorite_button.jsx'),
    UnfavoriteButton = require('../favorites/unfavorite_button.jsx'),
    History = require('react-router').History;

var PhotoItem = React.createClass({
  mixins: [History],
  getInitialState: function () {
    return {
      currentUser: {},
      favorited: FavoriteStore.isFavorited(this.props.photo.id),
      favoriteCount: this.props.photo.favorite_count
    }
  },
  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    this.favoriteListener = FavoriteStore.addListener(this._onFavoritesChange);
    // this.setState({ favorited: FavoriteStore.isFavorited(this.props.photo.id) });
  },
  componentWillUnmount: function () {
    this.sessionListener.remove();
    this.favoriteListener.remove();
  },
  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },
  _onFavoritesChange: function () {
    this.setState({ favorited: FavoriteStore.isFavorited(this.props.photo.id) });
  },
  handleClick: function () {
    this.history.pushState(null, "/users/" + this.props.photo.user_id + "/photos/" + this.props.photo.id, {});
  },
  decrementFavoriteCount: function () {
    this.setState({ favoriteCount: this.state.favoriteCount - 1 });
  },
  incrementFavoriteCount: function () {
    this.setState({ favoriteCount: this.state.favoriteCount + 1 });
  },
  render: function () {
    var url = "http://res.cloudinary.com/dwx2ctajn/image/upload/";
    var photoOptions = "w_" + this.props.size + ",h_" + this.props.size + ",c_fill/";
    var button;

    if (this.state.favorited) {
      button = (
        <UnfavoriteButton photoId={this.props.photo.id}
                          decrementFavoriteCount={this.decrementFavoriteCount} />
      )
    } else {
      button = (
        <FavoriteButton photoId={this.props.photo.id}
                        incrementFavoriteCount={this.incrementFavoriteCount} />
      )
    };

    return (
      <div className="photo-thumb" onClick={this.handleClick}>
        <img src={url + photoOptions + this.props.photo.photo_url}></img>
        { button }
        <span className="favorite-count">{this.state.favoriteCount}</span>
      </div>
    );
  }
});

module.exports = PhotoItem;
