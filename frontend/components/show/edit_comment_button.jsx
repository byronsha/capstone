var React = require("react");

var EditCommentButton = React.createClass({
  handleClick: function (e) {
    e.preventDefault();
    console.log(this.props.commentId);
    console.log("this doesn't do anything yet");
  },
  render: function () {
    return (
      <span onClick={this.handleClick}> <i className="fa fa-pencil faa-pulse animated-hover" id="comment-edit-button"></i></span>
    );
  }
});

module.exports = EditCommentButton;
