var React = require('react'),
    PhotoItem = require('../show/photo_item.jsx');

var PhotoIndex = React.createClass({
  render: function () {
    if (this.props.user.photos.length > 0) {
      return (
        <div className="feed-main">
          <div>
            {this.props.user.photos.map(function (photo) {
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

module.exports = PhotoIndex;
