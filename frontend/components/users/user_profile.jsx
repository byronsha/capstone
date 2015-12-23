var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    UserStore = require('../../stores/user_store.js'),
    Summary = require('./summary.jsx'),
    PhotoIndex = require('./photo_index.jsx'),
    Favorites = require('./favorites.jsx'),
    Following = require('./following.jsx'),
    FollowButton = require('./follow_button.jsx');

var FeedMain = React.createClass({
  getInitialState: function () {
    return { user: {}, currentTab: "summary" };
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onUserChange);
    ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));
  },
  componentWillReceiveProps: function (nextProps) {
    ApiUtil.fetchSingleUser(parseInt(nextProps.params.userId));
    this.setState({ currentTab: "summary" })
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  _onUserChange: function () {
    this.setState({ user: UserStore.user() });
  },
  handleSummaryClick: function () {
    this.setState({ currentTab: "summary" });
  },
  handlePhotoIndexClick: function () {
    this.setState({ currentTab: "photoIndex" });
  },
  handleFavoritesClick: function () {
    this.setState({ currentTab: "favorites" });
  },
  handleFollowingClick: function () {
    this.setState({ currentTab: "following" });
  },
  render: function () {
    var userInfo;
    if (Object.keys(this.state.user).length > 0) {
      userInfo = (
        <div className="user-banner">
          <div className="container user-info">
            <h1>{this.state.user.username}</h1>
            {this.state.user.full_name} <i className="fa fa-bolt"
                                           id="user-info-bullet"></i><span> </span>
            {this.state.user.photos.length} Photos <i className="fa fa-bolt"
                                                      id="user-info-bullet"></i><span> </span>
            Joined {this.state.user.created_at}
          </div>
        </div>
      )
    } else {
      userInfo = (
        <div className="user-banner"></div>
      )
    };

    var currentTab;
    switch(this.state.currentTab) {
      case "summary":
        currentTab = (<div><Summary user={this.state.user} /></div>)
        break;
      case "photoIndex":
        currentTab = (<div><PhotoIndex user={this.state.user} /></div>)
        break;
      case "favorites":
        currentTab = (<div><Favorites user={this.state.user} /></div>)
        break;
      case "following":
        currentTab = (<div><Following user={this.state.user} /></div>)
        break;
    };

    return (
      <div>
        { userInfo }
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-left">
              <li><a id={this.state.currentTab === "summary" ? "selected-profile-tab" : ""}
                     onClick={this.handleSummaryClick}>Summary</a></li>
              <li><a id={this.state.currentTab === "photoIndex" ? "selected-profile-tab" : ""}
                     onClick={this.handlePhotoIndexClick}>Photos</a></li>
              <li><a id={this.state.currentTab === "favorites" ? "selected-profile-tab" : ""}
                     onClick={this.handleFavoritesClick}>Favorites</a></li>
              <li><a id={this.state.currentTab === "following" ? "selected-profile-tab" : ""}
                     onClick={this.handleFollowingClick}>Following</a></li>
            </ul>
          </div>
        </nav>
        { currentTab }
      </div>
    )
  }
});

module.exports = FeedMain;
