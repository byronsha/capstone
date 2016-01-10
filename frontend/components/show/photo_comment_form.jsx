var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../util/api_util.js'),
    SessionStore = require('../../stores/session_store.js');

var PhotoCommentForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return { body: "", flash: "" };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var currentUser = SessionStore.currentUser();

    var commentParams = {
      photo_comment: {
        photo_id: this.props.photoId,
        user_id: currentUser.id,
        body: this.state.body,
      }
    };

    ApiUtil.createComment(commentParams);
    this.setState({ body: "" });
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea form="photo-form"
                      rows="2"
                      valueLink={this.linkState("body")}
                      placeholder="Add a comment"
                      className="form-control input-sm" />
          </div><br/>

          <div>
            <button type="submit"
                    className="btn btn-success btn-sm">Add comment</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = PhotoCommentForm;
