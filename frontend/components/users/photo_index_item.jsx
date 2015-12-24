var React = require('react'),
    SessionStore = require('../../stores/session_store.js'),
    ApiUtil = require('../../util/api_util.js'),
    History = require('react-router').History;

var PhotoIndexItem = React.createClass({
  mixins: [History],
  getInitialState: function () {
    return { currentUser: SessionStore.currentUser() }
  },
  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
  },
  componentWillUnmount: function () {
    this.sessionListener.remove();
  },
  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },
  handleClick: function () {
    this.history.pushState(null, "/users/" + this.props.photo.user_id + "/photos/" + this.props.photo.id, {});
  },
  deletePhoto: function (e) {
    e.stopPropagation();
    ApiUtil.deletePhoto(this.props.photo.id);
  },
  favoritePhoto: function (e) {
    e.stopPropagation();
  },
  render: function () {
    var url = "http://res.cloudinary.com/dwx2ctajn/image/upload/";
    var photoOptions = "w_" + this.props.size + ",h_" + this.props.size + ",c_fill/";

    if (this.state.currentUser.id === this.props.photo.user_id) {
      return (
        <div className="photo-thumb" onClick={this.handleClick}>
          <img src={url + photoOptions + this.props.photo.photo_url}></img>
          <span className="delete" onClick={this.deletePhoto}><i className="fa fa-trash-o faa-pulse animated-hover" id="photo-delete-button"></i></span>
        </div>
      );
    } else {
      return (
        <div className="photo-thumb" onClick={this.handleClick}>
          <img src={url + photoOptions + this.props.photo.photo_url}></img>
        </div>
      )
    }
  }
});

module.exports = PhotoIndexItem;
