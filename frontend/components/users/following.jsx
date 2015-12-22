var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    History = require('react-router').History;

var Following = React.createClass({
  mixins: [History],
  handleClick: function (e) {
    e.preventDefault();
    this.history.pushState(null, "/users/" + e.target.id, {});
  },
  render: function () {
    if (this.props.user.followed_users.length > 0) {
      return (
        <div>
          <ul>
            {this.props.user.followed_users.map(function (user) {
              return (
                <li onClick={this.handleClick}
                    id={user.id}
                    key={user.id}>{user.username}</li>
              )
            }.bind(this))}
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
