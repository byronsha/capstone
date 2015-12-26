var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    PhotoStore = require('../../stores/photo_store.js'),
    CommentStore = require('../../stores/comment_store.js'),
    PhotoComment = require('./photo_comment.jsx'),
    PhotoCommentForm = require('./photo_comment_form.jsx'),
    SessionStore = require('../../stores/session_store.js'),
    History = require('react-router').History;

var PhotoDetail = React.createClass({
  mixins: [History],
  getInitialState: function () {
    return { currentUser: {}, comments: [] };
  },
  componentDidMount: function () {
    ApiUtil.fetchAllPhotos();
    ApiUtil.fetchPhotoComments(this.props.params.photoId);
    this.commentListener = CommentStore.addListener(this._onCommentsChange);
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    this.setState({ currentUser: SessionStore.currentUser() });
  },
  componentWillUnmount: function () {
    this.commentListener.remove();
  },
  _onCommentsChange: function () {
    this.setState({ comments: CommentStore.all() });
  },
  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },
  handleClick: function () {
    this.history.pushState(null, "/users/" + this.props.params.userId + "/summary", {});
  },
  render: function () {
    var currentPhoto = PhotoStore.find(this.props.params.photoId);
    var url = "http://res.cloudinary.com/dwx2ctajn/image/upload/";
    var photo_options = "w_1500,h_750,c_fill/";
    var commentForm;

    if (Object.keys(this.state.currentUser).length === 0) {
      commentForm = (
        <div>
          <div>
            <span className="comment-date">
              Log in to add comments
            </span>
          </div><br/><br/>
        </div>
      )
    } else {
      commentForm = (
        <div>
          <div>
            <PhotoCommentForm photoId={this.props.params.photoId} />
          </div><br/><br/>
        </div>
      )
    };

    if (currentPhoto) {
      var currentPhotoUrl = currentPhoto.photo_url;
      return (
        <div>
          <div>
            <div>
              <div className="photo-detail-photo">
                <img src={url + photo_options + currentPhotoUrl}></img>
              </div>
            </div>
          </div>

          <br/>

          <div className="photo-detail-info">
            <div>
              <div>
                <h3 className="photo-title">{currentPhoto.title}</h3>
                {currentPhoto.description}
              </div>
              <br/>
              <div>
                <h4>About the photographer</h4>
                <span onClick={this.handleClick}
                      className="comment-author">{currentPhoto.user.username}</span>
                <br/>
                {currentPhoto.user.full_name}<br/>
                {currentPhoto.user.summary}
              </div>
            </div>
            <br/>
            <div>
              <div>
                <h4>Comments</h4>
                <ul className="photo-comment-list">
                  {this.state.comments.map(function (comment) {
                    return <PhotoComment key={comment.id}
                                         commentId={comment.id}
                                         author={comment.username}
                                         authorId={comment.user_id}
                                         body={comment.body}
                                         createdAt={comment.created_at} />;
                  })}
                </ul>
              </div>
            </div>
            <br/>
            { commentForm }
            <br/>
            <br/>
          </div>
        </div>
      );
    } else {
      return ( <div></div> );
    }
  }
});

module.exports = PhotoDetail;
