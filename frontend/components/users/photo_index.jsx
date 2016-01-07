var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    UserStore = require('../../stores/user_store.js'),
    PhotoStore = require('../../stores/photo_store.js'),
    SessionStore = require('../../stores/session_store.js'),
    PhotoIndexItem = require('./photo_index_item.jsx'),
    PhotoItem = require('../show/photo_item.jsx');

var PhotoIndex = React.createClass({
  getInitialState: function () {
    return { user: {}, currentUser: SessionStore.currentUser(), photos: [] }
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onUserChange);
    this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));
    ApiUtil.fetchUserPhotos(parseInt(this.props.params.userId));
  },
  componentWillUnmount: function () {
    this.userListener.remove();
    this.photoListener.remove();
    this.sessionListener.remove();
  },
  componentWillReceiveProps: function (nextProps) {
    ApiUtil.fetchSingleUser(parseInt(nextProps.params.userId));
    ApiUtil.fetchUserPhotos(parseInt(nextProps.params.userId));
  },
  _onUserChange: function () {
    this.setState({ user: UserStore.user() });
  },
  _onPhotosChange: function () {
    this.setState({ photos: PhotoStore.all() })
  },
  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },
  render: function () {
    var photoItem;

    if (Object.keys(this.state.user).length > 0) {
      if (this.state.user.id === this.state.currentUser.id) {
        photoItem = (
          <div>
            {this.state.photos.map(function (photo) {
              return <PhotoIndexItem key={photo.id} photo={photo} size={315} />
            })}
          </div>
        )
      } else {
        photoItem = (
          <div>
            {this.state.photos.map(function (photo) {
              return <PhotoItem key={photo.id} photo={photo} size={315} />
            })}
          </div>
        )
      }
    };

    if (Object.keys(this.state.user).length > 0) {
      return (
        <div>
          <div className="user-summary">
            <h3>Bio</h3>
            {this.state.user.summary}
            <br/><br/>
            Favorites: {this.state.user.favorited_photos.length} ·

            Following: {this.state.user.followed_users.length} ·

            Followers: {this.state.user.followers.length}
          </div>
          <div className="feed-main">
            { photoItem }
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    };
  }

});

module.exports = PhotoIndex;
