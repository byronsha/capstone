var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    UserStore = require('../../stores/user_store.js'),
    SessionStore = require('../../stores/session_store.js'),
    FollowingStore = require('../../stores/following_store.js');

var FollowButton = React.createClass({
  getStateFromStore: function () {
    var user = UserStore.user();
    var currentUser = SessionStore.currentUser();
    var following = FollowingStore.isFollowing(user.id);

    return {
      user: user,
      currentUser: currentUser,
      following: following
    };
  },
  getInitialState: function () {
    return this.getStateFromStore();
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onChange);
    this.sessionListener = SessionStore.addListener(this._onChange);
    this.followingListener = FollowingStore.addListener(this._onChange);
  },
  componentWillUnmount: function () {
    this.userListener.remove();
    this.sessionListener.remove();
    this.followingListener.remove();
  },
  _onChange: function () {
    this.setState(this.getStateFromStore());
  },
  addFollowing: function () {
    var followingParams = {
      following: {
        follower_id: this.state.currentUser.id,
        followed_id: this.state.user.id
      }
    };

    ApiUtil.addFollowing(followingParams);
  },
  removeFollowing: function () {
    var followingId = FollowingStore.findFollowingId(this.state.currentUser.id, this.state.user.id);

    ApiUtil.removeFollowing(followingId);
  },
  render: function () {
    if (Object.keys(this.state.currentUser).length > 0 && Object.keys(this.state.currentUser).length > 0) {
      if (this.state.user.id !== this.state.currentUser.id) {
        if (this.state.following) {
          return (
            <span className="btn btn-success btn-sm"
                  id="following-button">
                  <i className="fa fa-check"></i> Following
                  <span id="unfollow-button"
                        onClick={this.removeFollowing}>
                        <i className="fa fa-close faa-pulse animated-hover"></i>
                  </span>
            </span>
          )
        } else {
          return (
            <span className="btn btn-success btn-sm"
                  onClick={this.addFollowing}
                  id="follow-button">
                  <i className="fa fa-plus"></i> Follow
            </span>
          )
        }
      } else if (this.state.user.id === this.state.currentUser.id) {
        return(<div></div>)
      }
    } else {
      return (
        <span className="btn btn-success btn-sm"
              id="follow-button-ghost">
              <i className="fa fa-plus"><span className="follow-tooltip">Login to follow</span></i> Follow
        </span>
      )
    }
  }
});

module.exports = FollowButton;
