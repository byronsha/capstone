var React = require('react');

var Summary = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.user.summary}
      </div>
    )
  }
});

module.exports = Summary;
