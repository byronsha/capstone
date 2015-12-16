var React = require('react');

var Sidebar = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <ul className="nav navbar-nav pull-left">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">Explore</a></li>
            <li><a href="/contact">Galleries</a></li>
          </ul>

        </div>
      </nav>
    );
  }
});

module.exports = Sidebar;
