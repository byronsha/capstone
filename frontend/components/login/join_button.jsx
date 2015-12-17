var React = require('react');

var JoinButton = React.createClass({
  onClick: function () {
    console.log("You clicked the JOIN button!")
  },
  render: function () {
    return (
      <li><a onClick={this.onClick}>JOIN</a></li>
    );
  }
});

module.exports = JoinButton;
