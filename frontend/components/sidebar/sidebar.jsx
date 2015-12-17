var React = require('react'),
    HomeButton = require('./home_button.jsx'),
    ExploreButton = require('./explore_button.jsx'),
    CollectionsDropdown = require('./collections_dropdown.jsx'),
    LoginButton = require('../login/login_button.jsx'),
    JoinButton = require('../login/join_button.jsx');

var Sidebar = React.createClass({
  render: function () {
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
            <ul className="nav navbar-nav">
              <HomeButton />
              <ExploreButton />
              <CollectionsDropdown />
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <LoginButton />
              <JoinButton />
            </ul>
          </div>

        </div>
      </nav>

    );
  }
});

module.exports = Sidebar;
