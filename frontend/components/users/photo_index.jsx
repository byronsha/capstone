var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    PhotoIndexItem = require('./photo_index_item.jsx'),
    // PhotoStore = require('../../stores/photo_store.js'),
    UserStore = require('../../stores/user_store.js');

var PhotoIndex = React.createClass({
  getInitialState: function () {
    return { user: {} }
    // return { user: {}, photos: [] }
  },
  componentDidMount: function () {
    // this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    this.userListener = UserStore.addListener(this._onUserChange);
    // ApiUtil.fetchUserPhotos(parseInt(this.props.params.userId));
    ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));
  },
  componentWillUnmount: function () {
    // this.photoListener.remove();
    this.userListener.remove();
  },
  // _onPhotosChange: function () {
  //   this.setState({ photos: PhotoStore.all() })
  // },
  _onUserChange: function () {
    this.setState({ user: UserStore.user() });
  },
  render: function () {
    if (Object.keys(this.state.user).length > 0) {
      return (
        <div className="feed-main">
          <div>
            {this.state.user.photos.map(function (photo) {
              return <PhotoIndexItem key={photo.id}
                                     photo={photo}
                                     size={200} />
            })}
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    };
  }
});

module.exports = PhotoIndex;
