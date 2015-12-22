var React = require('react'),
    PhotoItem = require('../show/photo_item.jsx');

var Favorites = React.createClass({
  render: function () {
    if (this.props.user.favorited_photos.length > 0) {
      return (
        <div className="feed-main">
          <div>
            {this.props.user.favorited_photos.map(function (photo) {
              return <PhotoItem key={photo.id}
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

module.exports = Favorites;
