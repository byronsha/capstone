var React = require('react'),
    Sidebar = require('./sidebar/sidebar.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
