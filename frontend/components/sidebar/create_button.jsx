var React = require('react'),
    History = require('react-router').History;

var CreateButton = React.createClass({
  mixins: [History],
  onClick: function () {
    this.history.pushState(null, "/users/" + this.props.currentUser.id + "/photos/new", {});
  },
  render: function () {
    return (
      <li><a onClick={this.onClick}>CREATE</a></li>
    );
  }
});

module.exports = CreateButton;
