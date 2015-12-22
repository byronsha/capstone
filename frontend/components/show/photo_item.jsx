var React = require('react'),
    History = require('react-router').History;

var PhotoItem = React.createClass({
  mixins: [History],
  handleClick: function () {
    this.history.pushState(null, "/users/" + this.props.photo.user_id + "/photos/" + this.props.photo.id, {});
  },
  favoritePhoto: function (e) {
    e.stopPropagation();
    console.log("favorite button")
  },
  render: function () {
    var url = "http://res.cloudinary.com/dwx2ctajn/image/upload/",
        photoOptions = "w_" + this.props.size + ",h_" + this.props.size + ",c_fill/";

    return (
      <div className="photo-thumb" onClick={this.handleClick}>
        <img src={url + photoOptions + this.props.photo.photo_url}></img>
        <span className="favorite" onClick={this.favoritePhoto}><i className="fa fa-heart-o faa-pulse animated-hover" id="photo-favorite-button"></i></span>
      </div>
    );
  }
});

module.exports = PhotoItem;
