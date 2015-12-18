var React = require('react');

var ProfileButton = React.createClass({
  onClick: function () {
    console.log("hello " + this.props.currentUser.username);
  },
  render: function () {
    return (
      <li><a onClick={this.onClick}>{this.props.currentUser.username} <span className="caret"></span></a></li>
    );
  }
});

module.exports = ProfileButton;
