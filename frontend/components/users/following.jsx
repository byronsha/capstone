var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    UserStore = require('../../stores/user_store.js'),
    History = require('react-router').History;

var Following = React.createClass({
  mixins: [History],
  getInitialState: function () {
    return { user: {} }
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onUserChange);
    ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  _onUserChange: function () {
    this.setState({ user: UserStore.user() });
  },
  handleClick: function (e) {
    e.preventDefault();
    this.history.pushState(null, "/users/" + e.target.id + "/summary", {});
  },
  render: function () {
    if (Object.keys(this.state.user).length > 0) {
      return (
        <div>
          <ul>
            {this.state.user.followed_users.map(function (user) {
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
