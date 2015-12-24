var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    UserStore = require('../../stores/user_store.js');

var Summary = React.createClass({
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
  render: function () {
    if (Object.keys(this.state.user).length > 0) {

      console.log(this.state.user)

      return (
        <div className="user-summary">
          <h3>Bio</h3>
          {this.state.user.summary}
          <br/><br/>
          Favorites: {this.state.user.favorited_photos.length}
          <br/>
          Following: {this.state.user.followed_users.length}
          <br/>
          Followers: {this.state.user.followers.length}
        </div>
      )
    } else {
      return (<div></div>);
    }
  }
});

module.exports = Summary;
