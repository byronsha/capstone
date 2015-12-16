var React = require('react'),
    PhotoItem = require('./photo_item.jsx'),
    PhotoStore = require('../../stores/photo_store.js'),
    ApiUtil = require('../../util/api_util.js');

var FeedMain = React.createClass({
  getInitialState: function () {
    return {
      photos: []
    }
  },
  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this._onChange);
    ApiUtil.fetchAllPhotos();
  },
  componentWillUnmount: function () {
    this.photoListener.remove();
  },
  _onChange: function () {
    this.setState({ photos: PhotoStore.all() });
  },
  render: function () {
    if (this.state.photos.length > 0) {
      return (
        <div className="feed-main">
          {this.state.photos.map(function (photo) {
            return <PhotoItem key={photo.id}
                              photo={photo} />
          })}
        </div>
      );
    } else {
      return <div></div>;
    };
  }
});

module.exports = FeedMain;
