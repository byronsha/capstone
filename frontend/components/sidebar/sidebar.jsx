var React = require('react');

var Sidebar = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="collapse-menu">
            <ul className="nav navbar-nav pull-left">
              <li><a href="/home">Home</a></li>
              <li><a href="/about">Search</a></li>
              <li><a href="/contact">Galleries</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Sidebar;
