var React = require('react'),
    History = require('react-router').History,
    SessionStore = require('../../stores/session_store.js');

var YouButton = React.createClass({
  mixins: [History],
  componentDidMount: function () {
    this.currentUser = SessionStore.currentUser();
  },
  handleClick: function () {
    this.history.pushState(null, "/users/" + this.currentUser.id, {});
  },
  render: function () {
    return (
      <li><a onClick={this.handleClick}>YOU</a></li>
    );
  }
});

module.exports = YouButton;




// handleProfileClick: function () {
//   this.history.pushState(null, "/users/" + this.currentUser.id, {});
// },
// handlePhotosClick: function () {
//   this.history.pushState(null, "/users/" + this.currentUser.id, { currentTab: "photoIndex" });
// },
// handleFavoritesClick: function () {
//   this.history.pushState(null, "/users/" + this.currentUser.id, { currentTab: "favorites" });
// },
// handleFollowingClick: function () {
//   this.history.pushState(null, "/users/" + this.currentUser.id, { currentTab: "following" });
// },


// <li className="dropdown">
//   <a className="dropdown-toggle"
//      data-toggle="dropdown"
//      role="button"
//      aria-haspopup="true"
//      aria-expanded="false">YOU <span className="caret"></span>
//   </a>
//   <ul className="dropdown-menu" id="you-dropdown">
//     <li onClick={this.handleProfileClick} className="you-dropdown-item">Profile</li>
//     <li role="separator" className="divider"></li>
//     <li onClick={this.handlePhotosClick} className="you-dropdown-item">Photos</li>
//     <li role="separator" className="divider"></li>
//     <li onClick={this.handleFavoritesClick} className="you-dropdown-item">Favorites</li>
//     <li role="separator" className="divider"></li>
//     <li onClick={this.handleFollowingClick} className="you-dropdown-item">Following</li>
//   </ul>
// </li>
