var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    PhotoStore = require('../../stores/photo_store.js'),
    CommentStore = require('../../stores/comment_store.js'),
    PhotoComment = require('./photo_comment.jsx'),
    PhotoCommentForm = require('./photo_comment_form.jsx'),
    SessionStore = require('../../stores/session_store.js');

var PhotoDetail = React.createClass({
  getInitialState: function () {
    return { comments: [] };
  },
  componentDidMount: function () {
    this.commentListener = CommentStore.addListener(this._onCommentsChange);
    ApiUtil.fetchPhotoComments(this.props.params.photoId);
  },
  componentWillUnmount: function () {
    this.commentListener.remove();
  },
  _onCommentsChange: function () {
    this.setState({ comments: CommentStore.all() });
  },
  render: function () {
    var currentPhoto = PhotoStore.find(this.props.params.photoId);
    var currentPhotoUrl = currentPhoto.photo_url;
    var url = "http://res.cloudinary.com/dwx2ctajn/image/upload/";
    var photo_options = "w_1100,h_550,c_fill/";
    var currentUser = SessionStore.currentUser();
    var commentForm;

    if (Object.keys(currentUser).length === 0) {
      commentForm = (
        <div className="row">
          <div className="col-md-6">
            Log in to add comments.
          </div>
        </div>
      )
    } else {
      commentForm = (
        <div className="row">
          <div className="col-md-6">
            <PhotoCommentForm photoId={this.props.params.photoId} />
          </div>
        </div>
      )
    };

    return (
      <div className="container">
        <div className="photo-show">
          <img src={url + photo_options + currentPhotoUrl}></img>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h3>{currentPhoto.title}</h3>
            {currentPhoto.description}
          </div>
          <div className="col-md-6">
            <h3>About the photographer</h3>
            {currentPhoto.user.username}<br/>
            {currentPhoto.user.full_name}<br/>
            {currentPhoto.user.summary}
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-md-6">
            <h3>Comments</h3>
            <ul className="photo-comment-list">
              {this.state.comments.map(function (comment) {
                return <PhotoComment key={comment.id}
                                     author={comment.username}
                                     body={comment.body}
                                     createdAt={comment.created_at} />;
              })}
            </ul>
          </div>
        </div>

        <br/>
        { commentForm }
      </div>
    );
  }
});

module.exports = PhotoDetail;
