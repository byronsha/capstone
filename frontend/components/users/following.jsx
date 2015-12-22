var React = require('react');

var Following = React.createClass({
  render: function () {
    if (this.props.user.followed_users.length > 0) {
      return (
        <div>
          <ul>
            {this.props.user.followed_users.map(function (user) {
              return (
                <li key={user.id}>{user.username}</li>
              )
            })}
          </ul>
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

module.exports = Following;
