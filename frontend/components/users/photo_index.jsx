var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    PhotoIndexItem = require('./photo_index_item.jsx'),
    PhotoStore = require('../../stores/photo_store.js');

var PhotoIndex = React.createClass({
  getInitialState: function () {
    return { photos: [] }
  },
  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    ApiUtil.fetchUserPhotos(this.props.user.id)
  },
  componentWillUnmount: function () {
    this.photoListener.remove();
  },
  _onPhotosChange: function () {
    this.setState({ photos: PhotoStore.all() })
  },
  render: function () {
    if (this.props.user.photos.length > 0) {
      return (
        <div className="feed-main">
          <div>
            {this.state.photos.map(function (photo) {
              return <PhotoIndexItem key={photo.id}
                                     photo={photo}
                                     size={200} />
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

module.exports = PhotoIndex;
