var React = require('react'),
    ApiUtil = require('../../util/api_util.js');

var DeleteCommentButton = React.createClass({
  handleClick: function (e) {
    e.preventDefault();
    ApiUtil.deleteComment(this.props.commentId);
  },
  render: function () {
    return (
      <span onClick={this.handleClick}> <i className="fa fa-trash faa-pulse animated-hover" id="comment-delete-button"></i></span>
    );
  }
});

module.exports = DeleteCommentButton;
