var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    SessionStore = require('../../stores/session_store.js'),
    FavoriteStore = require('../../stores/favorite_store.js'),
    History = require('react-router').History;

var PhotoItem = React.createClass({
  mixins: [History],
  getInitialState: function () {
    return { currentUser: {}, favorited: false }
  },
  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    this.favoriteListener = FavoriteStore.addListener(this._onFavoritesChange);
    this.setState({ favorited: FavoriteStore.isFavorited(this.props.photo.id) });
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
  favoritePhoto: function (e) {
    e.stopPropagation();
    console.log("favorite button")
  },
  render: function () {
    var url = "http://res.cloudinary.com/dwx2ctajn/image/upload/";
    var photoOptions = "w_" + this.props.size + ",h_" + this.props.size + ",c_fill/";

    if (this.state.favorited) {
      return (
        <div className="photo-thumb" onClick={this.handleClick}>
          <img src={url + photoOptions + this.props.photo.photo_url}></img>
          <span className="favorite"
                onClick={this.favoritePhoto}>
                <i className="fa fa-heart faa-pulse animated-hover" id="photo-unfavorite-button"></i>
          </span>
          <span className="favorite-count">{this.props.photo.favorite_count}</span>

        </div>
      );
    } else {
      return (
        <div className="photo-thumb" onClick={this.handleClick}>
          <img src={url + photoOptions + this.props.photo.photo_url}></img>
          <span className="favorite"
                onClick={this.favoritePhoto}>
                <i className="fa fa-heart-o faa-pulse animated-hover" id="photo-favorite-button"></i>
          </span>
          <span className="favorite-count">{this.props.photo.favorite_count}</span>
        </div>
      );
    }
  }
});

module.exports = PhotoItem;
