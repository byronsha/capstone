var React = require('react'),
    History = require('react-router').History;

var HomeButton = React.createClass({
  mixins: [History],
  onClick: function () {
    this.history.pushState(null, "/", {});
  },
  render: function () {
    return (
      <li><a className="logo" onClick={this.onClick}>omnify</a></li>
    );
  }
});

module.exports = HomeButton;
