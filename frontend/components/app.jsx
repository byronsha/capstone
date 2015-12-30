var React = require('react'),
    ApiUtil = require('../util/api_util.js'),
    Sidebar = require('./sidebar/sidebar.jsx');

var App = React.createClass({
  componentWillMount: function () {
    if (window.currentUserId !== null) {
      ApiUtil.fetchCurrentUser(window.currentUserId);
      ApiUtil.fetchUserFavorites(window.currentUserId);
      ApiUtil.fetchUserFollowings(window.currentUserId);
    };
    ApiUtil.fetchAllPhotos();
  },
  render: function () {
    return (
      <div>
        <Sidebar />
        <div className="sidebar-background" />
        { this.props.children }
      </div>
    );
  }
});

module.exports = App;
