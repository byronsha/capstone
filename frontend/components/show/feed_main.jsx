var React = require('react'),
    PhotoItem = require('./photo_item.jsx'),
    PhotoStore = require('../../stores/photo_store.js'),
    CollectionStore = require('../../stores/collection_store.js'),
    ApiUtil = require('../../util/api_util.js');

var FeedMain = React.createClass({
  getInitialState: function () {
    return { photos: [], collection: [] }
  },
  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this._onPhotoChange);
    // this.collectionListener = CollectionStore.addListener(this._onCollectonChange);
    ApiUtil.fetchAllPhotos();
  },
  componentWillUnmount: function () {
    this.photoListener.remove();
    // this.collectionListener.remove();
  },
  _onPhotoChange: function () {
    this.setState({ photos: PhotoStore.all() });
  },
  // _onCollectionChange: function () {
  //   this.setState({ collection: CollectionStore.all() });
  // },
  render: function () {
    if (this.state.photos.length > 0) {
      return (
        <div className="feed-main">
          <div>
            {this.state.photos.map(function (photo) {
              return <PhotoItem key={photo.id}
                                photo={photo} />
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

module.exports = FeedMain;
