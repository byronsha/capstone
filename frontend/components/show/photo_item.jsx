var React = require('react'),
    History = require('react-router').History;

var PhotoItem = React.createClass({
  mixins: [History],
  onClick: function () {
    this.history.pushState(null, "/users/" + this.props.photo.user_id + "/photos/" + this.props.photo.id, {});
  },
  render: function () {
    var url = "http://res.cloudinary.com/dwx2ctajn/image/upload/",
        photoOptions = "w_" + this.props.size + ",h_" + this.props.size + ",c_fill/";

    return (
      <div className="photo-thumb" onClick={this.onClick}>
        <img src={url + photoOptions + this.props.photo.photo_url}></img>
      </div>
    );
  }
});

module.exports = PhotoItem;
