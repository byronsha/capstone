var React = require('react'),
    ApiUtil = require('../util/api_util.js'),
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
