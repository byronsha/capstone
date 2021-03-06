var React = require('react'),
    History = require('react-router').History,
    SessionStore = require('../../stores/session_store.js');

var YouButton = React.createClass({
  mixins: [History],
  componentDidMount: function () {
    this.currentUser = SessionStore.currentUser();
  },
  handleCreateClick: function () {
    this.history.pushState(null, "/users/" + this.currentUser.id + "/create", {});
  },
  handlePhotosClick: function () {
    this.history.pushState(null, "/users/" + this.currentUser.id + "/photoIndex", {});
  },
  handleFavoritesClick: function () {
    this.history.pushState(null, "/users/" + this.currentUser.id + "/favorites", {});
  },
  handleFollowingClick: function () {
    this.history.pushState(null, "/users/" + this.currentUser.id + "/following", {});
  },
  render: function () {
    this.currentUser = SessionStore.currentUser();

    return (
      <li className="dropdown">
        <a className="dropdown-toggle"
           data-toggle="dropdown"
           role="button"
           aria-haspopup="true"
           aria-expanded="false">{this.currentUser.username} <i className="fa fa-angle-down"></i>
        </a>
        <ul className="dropdown-menu" id="you-dropdown">
          <li onClick={this.handlePhotosClick} className="you-dropdown-item">Photos</li>
          <li role="separator" className="divider"></li>
          <li onClick={this.handleFavoritesClick} className="you-dropdown-item">Favorites</li>
          <li role="separator" className="divider"></li>
          <li onClick={this.handleFollowingClick} className="you-dropdown-item">Following</li>
          <li role="separator" className="divider"></li>
          <li onClick={this.handleCreateClick} className="you-dropdown-item">Create</li>
        </ul>
      </li>
    );
  }
});

module.exports = YouButton;
