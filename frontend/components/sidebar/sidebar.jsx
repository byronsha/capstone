var React = require('react'),
    SessionStore = require('../../stores/session_store.js'),
    HomeButton = require('./home_button.jsx'),
    ExploreButton = require('./explore_button.jsx'),
    CollectionsDropdown = require('./collections_dropdown.jsx'),
    LoginButton = require('../sessions/login_button.jsx'),
    LogoutButton = require('../sessions/logout_button.jsx'),
    SignupButton = require('../sessions/signup_button.jsx'),
    ProfileButton = require('../sessions/profile_button.jsx'),
    CreateButton = require('./create_button.jsx');

var Sidebar = React.createClass({
  getInitialState: function () {
    return { currentUser: {} };
  },
  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
  },
  componentWillUnmount: function () {
    this.sessionListener.remove();
  },
  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },
  render: function () {
    var sessionButtons;

    if (Object.keys(this.state.currentUser).length === 0) {
      sessionButtons = (
        <ul className="nav navbar-nav navbar-right">
          <LoginButton />
          <SignupButton />
        </ul>
      )
    } else {
      sessionButtons = (
        <ul className="nav navbar-nav navbar-right">
          <CreateButton currentUser={this.state.currentUser} />
          <ProfileButton currentUser={this.state.currentUser} />
          <LogoutButton />
        </ul>
      )
    };

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-left">
              <HomeButton />
              <ExploreButton />
              <CollectionsDropdown />
            </ul>
            { sessionButtons }
          </div>

        </div>
      </nav>
    );
  }
});

module.exports = Sidebar;
