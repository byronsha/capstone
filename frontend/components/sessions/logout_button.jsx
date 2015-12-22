var React = require('react'),
    SessionsUtil = require('../../util/sessions_util.js');

var LogoutButton = React.createClass({
  onClick: function () {
    SessionsUtil.logout();
  },
  render: function () {
    return (
      <li><a onClick={this.onClick}>LOGOUT</a></li>
    );
  }
});

module.exports = LogoutButton;
