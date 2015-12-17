var React = require('react');

var LoginButton = React.createClass({
  onClick: function () {
    console.log("You clicked the LOGIN button!")
  },
  render: function () {
    return (
      <li><a onClick={this.onClick}>LOGIN</a></li>
    );
  }
});

module.exports = LoginButton;
