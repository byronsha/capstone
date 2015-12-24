var React = require('react'),
    ApiUtil = require('../../util/api_util.js');

var FollowButton = React.createClass({
  render: function () {
    return (
      <span className="btn btn-success btn-sm"
            id="follow-button">
            <i className="fa fa-plus"></i> Follow
      </span>
    )
  }
});

module.exports = FollowButton;
