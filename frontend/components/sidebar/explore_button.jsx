var React = require('react'),
    History = require('react-router').History;

var ExploreButton = React.createClass({
  mixins: [History],
  onClick: function () {
    this.history.pushState(null, "/photos", {});
  },
  render: function () {
    return (
      <li><a onClick={this.onClick}>EXPLORE</a></li>
    );
  }
});

module.exports = ExploreButton;
