var React = require('react'),
    SessionsUtil = require('../../util/sessions_util.js'),
    History = require('react-router').History;

var LogoutButton = React.createClass({
  mixins: [History],
  onClick: function () {
    SessionsUtil.logout();
    this.history.pushState(null, "/", {});
  },
  render: function () {
    return (
      <li><a onClick={this.onClick}>LOGOUT</a></li>
    );
  }
});

module.exports = LogoutButton;
