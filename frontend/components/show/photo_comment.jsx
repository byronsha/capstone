var React = require('react'),
    PhotoStore = require('../../stores/photo_store.js'),
    SessionStore = require('../../stores/session_store.js'),
    EditCommentButton = require('./edit_comment_button.jsx'),
    DeleteCommentButton = require('./delete_comment_button.jsx'),
    History = require('react-router').History;

var PhotoComment = React.createClass({
  mixins: [History],
  handleClick: function () {
    this.history.pushState(null, "/users/" + this.props.authorId, {});
  },
  render: function () {
    var currentUser = SessionStore.currentUser();
    var commentItem = (
      <li className="photo-comment-item">
        <span onClick={this.handleClick}
              className="comment-author">{this.props.author}</span>
        <span> </span>
        <span className="comment-date">{this.props.createdAt}</span>
        <br/>
        {this.props.body}
      </li>
    );

    if (Object.keys(currentUser).length !== 0) {
      if (currentUser.id === this.props.authorId) {
        commentItem = (
          <li className="photo-comment-item">
            <span className="comment-author">{this.props.author}</span>
            <span> </span>
            <span className="comment-date">{this.props.createdAt}</span>
            <EditCommentButton commentId={this.props.commentId} />
            <DeleteCommentButton commentId={this.props.commentId} />
            <br/>
            {this.props.body}
          </li>
        )
      }
    };

    return (<div>{ commentItem }</div>);
  }
});

module.exports = PhotoComment;
