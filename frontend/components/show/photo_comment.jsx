var React = require('react'),
    PhotoStore = require('../../stores/photo_store.js');

var PhotoComment = React.createClass({
  render: function () {
    return (
      <li className="photo-comment-item">
        <span className="comment-author">{this.props.author}</span>
        <span> </span>
        <span className="comment-date">{this.props.createdAt}</span><br/>
        {this.props.body}
      </li>
    )
  }
});

module.exports = PhotoComment;
