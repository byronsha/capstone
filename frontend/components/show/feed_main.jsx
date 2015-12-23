var React = require('react'),
    PhotoItem = require('./photo_item.jsx'),
    PhotoStore = require('../../stores/photo_store.js'),
    SessionStore = require('../../stores/session_store.js'),
    CollectionStore = require('../../stores/collection_store.js'),
    ApiUtil = require('../../util/api_util.js');

var FeedMain = React.createClass({
  getInitialState: function () {
    return { currentUser: {}, photos: [], collection: "All" }
  },
  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    this.collectionListener = CollectionStore.addListener(this._onCollectionChange);
    ApiUtil.fetchAllPhotos();
  },
  componentWillUnmount: function () {
    this.photoListener.remove();
    this.collectionListener.remove();
  },
  _onPhotosChange: function () {
    this.setState({ photos: PhotoStore.all() });
  },
  _onCollectionChange: function () {
    this.setState({ collection: CollectionStore.currentCollection() });
  },
  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },
  _onFavoritesChange: function () {
    this.setState({ favorites: FavoriteStore.all() })
  },
  render: function () {
    var currentCollectionPhotos = [];

    if (this.state.collection === "All") {
      for (var i = 0; i < this.state.photos.length; i++) {
        currentCollectionPhotos.push(this.state.photos[i]);
      }
    } else {
      for (var i = 0; i < this.state.photos.length; i++) {
        for (var j = 0; j < this.state.photos[i].collections.length; j++) {
          if (this.state.photos[i].collections[j].title === this.state.collection) {
            currentCollectionPhotos.push(this.state.photos[i]);
          }
        }
      }
    }

    if (currentCollectionPhotos.length > 0) {
      return (
        <div className="feed-main">
          <div>
            {currentCollectionPhotos.map(function (photo) {
              return <PhotoItem key={photo.id}
                                photo={photo}
                                size={250} />
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
