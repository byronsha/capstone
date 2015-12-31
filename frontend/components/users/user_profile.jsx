var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    UserStore = require('../../stores/user_store.js'),
    SessionStore = require('../../stores/session_store.js'),
    Summary = require('./summary.jsx'),
    PhotoIndex = require('./photo_index.jsx'),
    Favorites = require('./favorites.jsx'),
    Following = require('./following.jsx'),
    FollowButton = require('../followings/follow_button.jsx'),
    History = require('react-router').History;

var UserProfile = React.createClass({
  mixins: [History],
  getInitialState: function () {
    return { user: {}, currentUser: SessionStore.currentUser(), currentTab: this.props.routes[2].path };
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onUserChange);
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({ currentTab: nextProps.routes[2].path });
    ApiUtil.fetchSingleUser(parseInt(nextProps.params.userId));
  },
  componentWillUnmount: function () {
    this.userListener.remove();
    this.sessionListener.remove();
  },
  _onUserChange: function () {
    this.setState({ user: UserStore.user() });
  },
  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });

    if (this.props.routes[2].path === "create") {
      this.history.pushState(null, "/users/" + this.state.user.id + "/photoIndex", {});
    }
  },
  handleCreateClick: function () {
    this.setState({ currentTab: "create" });
    this.history.pushState(null, "/users/" + this.state.user.id + "/create", {});
  },
  handlePhotoIndexClick: function () {
    this.setState({ currentTab: "photoIndex" });
    this.history.pushState(null, "/users/" + this.state.user.id + "/photoIndex", {});
  },
  handleFavoritesClick: function () {
    this.setState({ currentTab: "favorites" });
    this.history.pushState(null, "/users/" + this.state.user.id + "/favorites", {});
  },
  handleFollowingClick: function () {
    this.setState({ currentTab: "following" });
    this.history.pushState(null, "/users/" + this.state.user.id + "/following", {});
  },
  render: function () {
    var userInfo;
    var createTab;

    if (Object.keys(this.state.user).length > 0) {
      var backgroundImage = { backgroundImage: "url('http://res.cloudinary.com/dwx2ctajn/image/upload/w_2000,h_350,c_fill/" + this.state.user.background_url + "')" };

      userInfo = (
        <div className="user-banner" style={backgroundImage}>
          <div className="user-info">
            <h1><span className="profile-username">{this.state.user.full_name}</span>
              <FollowButton userId={this.state.user.id}/>
            </h1>
            {this.state.user.username} <i className="fa fa-bolt"
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

    if (this.state.user.id === this.state.currentUser.id) {
      createTab = (
        <li><a id={this.state.currentTab === "create" ? "selected-profile-tab" : ""}
               onClick={this.handleCreateClick}>Create</a></li>
      )
    } else {
      createTab = (<div></div>)
    };

    return (
      <div>
        { userInfo }
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-left">
              <li><a id={this.state.currentTab === "photoIndex" ? "selected-profile-tab" : ""}
                     onClick={this.handlePhotoIndexClick}>Photos</a></li>
              <li><a id={this.state.currentTab === "favorites" ? "selected-profile-tab" : ""}
                     onClick={this.handleFavoritesClick}>Favorites</a></li>
              <li><a id={this.state.currentTab === "following" ? "selected-profile-tab" : ""}
                     onClick={this.handleFollowingClick}>Following</a></li>
              { createTab }
            </ul>
          </div>
        </nav>
        { this.props.children }
      </div>
    )
  }
});

module.exports = UserProfile;

// var UserProfile = React.createClass({
//   getInitialState: function () {
//     return { user: {}, currentTab: "summary" };
//   },
//   componentDidMount: function () {
//     this.userListener = UserStore.addListener(this._onUserChange);
//     ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));
//   },
//   componentWillReceiveProps: function (nextProps) {
//     ApiUtil.fetchSingleUser(parseInt(nextProps.params.userId));
//     this.setState({ currentTab: "summary" })
//   },
//   componentWillUnmount: function () {
//     this.userListener.remove();
//   },
//   _onUserChange: function () {
//     this.setState({ user: UserStore.user() });
//   },
//   handleSummaryClick: function () {
//     this.setState({ currentTab: "summary" });
//   },
//   handlePhotoIndexClick: function () {
//     this.setState({ currentTab: "photoIndex" });
//   },
//   handleFavoritesClick: function () {
//     this.setState({ currentTab: "favorites" });
//   },
//   handleFollowingClick: function () {
//     this.setState({ currentTab: "following" });
//   },
//   render: function () {
//     var userInfo;
//     if (Object.keys(this.state.user).length > 0) {
//       userInfo = (
//         <div className="user-banner">
//           <div className="container user-info">
//             <h1>{this.state.user.username}</h1>
//             {this.state.user.full_name} <i className="fa fa-bolt"
//                                            id="user-info-bullet"></i><span> </span>
//             {this.state.user.photos.length} Photos <i className="fa fa-bolt"
//                                                       id="user-info-bullet"></i><span> </span>
//             Joined {this.state.user.created_at}
//           </div>
//         </div>
//       )
//     } else {
//       userInfo = (
//         <div className="user-banner"></div>
//       )
//     };
//
//     var currentTab;
//     switch(this.state.currentTab) {
//       case "summary":
//         currentTab = (<div><Summary user={this.state.user} /></div>)
//         break;
//       case "photoIndex":
//         currentTab = (<div><PhotoIndex user={this.state.user} /></div>)
//         break;
//       case "favorites":
//         currentTab = (<div><Favorites user={this.state.user} /></div>)
//         break;
//       case "following":
//         currentTab = (<div><Following user={this.state.user} /></div>)
//         break;
//     };
//
//     return (
//       <div>
//         { userInfo }
//         <nav className="navbar navbar-default">
//           <div className="container-fluid">
//             <ul className="nav navbar-nav navbar-left">
//               <li><a id={this.state.currentTab === "summary" ? "selected-profile-tab" : ""}
//                      onClick={this.handleSummaryClick}>Summary</a></li>
//               <li><a id={this.state.currentTab === "photoIndex" ? "selected-profile-tab" : ""}
//                      onClick={this.handlePhotoIndexClick}>Photos</a></li>
//               <li><a id={this.state.currentTab === "favorites" ? "selected-profile-tab" : ""}
//                      onClick={this.handleFavoritesClick}>Favorites</a></li>
//               <li><a id={this.state.currentTab === "following" ? "selected-profile-tab" : ""}
//                      onClick={this.handleFollowingClick}>Following</a></li>
//             </ul>
//           </div>
//         </nav>
//         { currentTab }
//       </div>
//     )
//   }
// });
//
// module.exports = UserProfile;
