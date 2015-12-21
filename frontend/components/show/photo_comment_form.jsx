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
      <div className="container">

        <form onSubmit={this.handleSubmit}>

          <div className="row">
            <div className="col-md-6">
              <div>
                <textarea form="photo-form"
                          rows="3"
                          valueLink={this.linkState("body")}
                          placeholder="Add comment"
                          className="form-control input-sm" />
              </div>
            </div>
          </div>

          <br/>

          <div className="row">
            <div className="col-md-12">
              <div>
                <button type="submit"
                        className="btn btn-success btn-sm">Submit</button>

                <span className="flash-error">{this.state.flash}</span>
              </div>
            </div>
          </div>

        </form>

      </div>
    );
  }
});

module.exports = PhotoCommentForm;
