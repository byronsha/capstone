var React = require('react'),
    ApiUtil = require('../util/api_util.js'),
    Sidebar = require('./sidebar/sidebar.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Sidebar />
        <div className="spacing-object-50">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
