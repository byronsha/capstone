var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    PhotoItem = require('../show/photo_item.jsx'),
    UserStore = require('../../stores/user_store.js');

var Favorites = React.createClass({
  getInitialState: function () {
    return { user: {} }
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onUserChange);
    ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  _onUserChange: function () {
    this.setState({ user: UserStore.user() });
  },
  render: function () {
    if (Object.keys(this.state.user).length > 0) {
      return (
        <div className="feed-main">
          <div>
            {this.state.user.favorited_photos.map(function (photo) {
              return <PhotoItem key={photo.id}
                                photo={photo}
                                size={315} />
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    };
  }
});

module.exports = Favorites;
