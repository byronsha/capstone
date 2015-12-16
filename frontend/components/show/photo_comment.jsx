var React = require('react'),
    PhotoStore = require('../../stores/photo_store.js');

var PhotoComment = React.createClass({
  render: function () {
    return (
      <li>
        <span>{this.props.createdAt} - {this.props.author}:</span><br/>
        {this.props.body}
      </li>
    )
  }
});

module.exports = PhotoComment;
