var React = require('react'),
    SessionStore = require('../../stores/session_store.js'),
    ApiUtil = require('../../util/api_util.js'),
    History = require('react-router').History;

var PhotoIndexItem = React.createClass({
  mixins: [History],
  handleClick: function () {
    this.history.pushState(null, "/users/" + this.props.photo.user_id + "/photos/" + this.props.photo.id, {});
  },
  deletePhoto: function (e) {
    e.stopPropagation();
    ApiUtil.deletePhoto(this.props.photo.id);
  },
  favoritePhoto: function (e) {
    e.stopPropagation();
    console.log("favorite button")
  },
  render: function () {
    var url = "http://res.cloudinary.com/dwx2ctajn/image/upload/";
    var photoOptions = "w_" + this.props.size + ",h_" + this.props.size + ",c_fill/";
    var currentUser = SessionStore.currentUser();

    if (currentUser.id === this.props.photo.user_id) {
      return (
        <div className="photo-thumb" onClick={this.handleClick}>
          <img src={url + photoOptions + this.props.photo.photo_url}></img>
          <span className="delete" onClick={this.deletePhoto}><i className="fa fa-trash-o faa-pulse animated-hover" id="photo-delete-button"></i></span>
          <span className="favorite" onClick={this.favoritePhoto}><i className="fa fa-heart-o faa-pulse animated-hover" id="photo-favorite-button"></i></span>
        </div>
      );
    } else {
      return (
        <div className="photo-thumb" onClick={this.handleClick}>
          <img src={url + photoOptions + this.props.photo.photo_url}></img>
          <span className="favorite" onClick={this.favoritePhoto}><i className="fa fa-heart-o faa-pulse animated-hover" id="photo-favorite-button"></i></span>
        </div>
      )
    }
  }
});

module.exports = PhotoIndexItem;
