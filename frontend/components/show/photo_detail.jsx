var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    PhotoStore = require('../../stores/photo_store.js'),
    PhotoItem = require('./photo_item.jsx'),
    CommentStore = require('../../stores/comment_store.js'),
    PhotoComment = require('./photo_comment.jsx'),
    PhotoCommentForm = require('./photo_comment_form.jsx'),
    SessionStore = require('../../stores/session_store.js'),
    FavoriteStore = require('../../stores/favorite_store.js'),
    FavoriteButton = require('../favorites/favorite_button.jsx'),
    UnfavoriteButton = require('../favorites/unfavorite_button.jsx'),
    FollowButton = require('../followings/follow_button.jsx'),
    History = require('react-router').History;

var PhotoDetail = React.createClass({
  mixins: [History],
  getInitialState: function () {
    return {
      currentUser: SessionStore.currentUser(),
      currentPhoto: {},
      comments: [],
      favorited: FavoriteStore.isFavorited(this.props.params.photoId),
      favoriteCount: PhotoStore.fetchFavoriteCount(this.props.params.photoId)
    };
  },
  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this._onPhotosChange);
    this.commentListener = CommentStore.addListener(this._onCommentsChange);
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    this.favoriteListener = FavoriteStore.addListener(this._onFavoritesChange);

    this.setState({ favoriteCount: PhotoStore.fetchFavoriteCount(this.props.params.photoId) });

    ApiUtil.fetchAllPhotos();
    ApiUtil.fetchPhotoComments(this.props.params.photoId);

    if (window.currentUserId !== null) {
      ApiUtil.fetchCurrentUser(window.currentUserId)
    };
  },
  componentWillUnmount: function () {
    this.photoListener.remove();
    this.commentListener.remove();
    this.sessionListener.remove();
    this.favoriteListener.remove();
  },
  _onPhotosChange: function () {
    this.setState({ currentPhoto: PhotoStore.find(this.props.params.photoId) });
    this.setState({ favoriteCount: PhotoStore.fetchFavoriteCount(this.props.params.photoId )});
  },
  _onCommentsChange: function () {
    this.setState({ comments: CommentStore.all() });
  },
  _onSessionChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },
  _onFavoritesChange: function () {
    this.setState({ favorited: FavoriteStore.isFavorited(this.props.params.photoId) });
  },
  componentWillReceiveProps: function (nextProps) {
    ApiUtil.fetchPhotoComments(nextProps.params.photoId);
    this.setState({ currentPhoto: PhotoStore.find(nextProps.params.photoId) });
    this.setState({ favorited: FavoriteStore.isFavorited(nextProps.params.photoId) });
    this.setState({ favoriteCount: PhotoStore.fetchFavoriteCount(nextProps.params.photoId )});
  },
  handleClick: function () {
    this.history.pushState(null, "/users/" + this.props.params.userId + "/photoIndex", {});
  },
  handleThumbnailClick: function (e) {
    var userId = e.target.dataset.userid;
    var photoId = e.target.dataset.photoid;
    this.history.pushState(null, "/users/" + userId + "/photos/" + photoId, {});
  },
  handlePreviousClick: function () {
    var previousPhoto = PhotoStore.fetchPrevious(this.state.currentPhoto.id);
    this.history.pushState(null, "/users/" + previousPhoto.user_id + "/photos/" + previousPhoto.id, {});
  },
  handleNextClick: function () {
    var nextPhoto = PhotoStore.fetchNext(this.state.currentPhoto.id);
    this.history.pushState(null, "/users/" + nextPhoto.user_id + "/photos/" + nextPhoto.id, {});
  },
  decrementFavoriteCount: function () {
    this.setState({ favoriteCount: this.state.favoriteCount - 1 });
  },
  incrementFavoriteCount: function () {
    this.setState({ favoriteCount: this.state.favoriteCount + 1 });
  },
  render: function () {
    var that = this;
    var currentPhoto = this.state.currentPhoto;
    var url = "http://res.cloudinary.com/dwx2ctajn/image/upload/";
    var photo_options = "w_1200,h_750,c_fill/";
    var thumbnail_options = "w_50,h_50,c_fill/";
    var thumbnails = PhotoStore.all();
    var commentForm;

    this.state.comments.sort(function (a, b) {
      if (new Date(a.created_at) < new Date(b.created_at)) {
        return - 1;
      } else if (new Date(a.created_at) > new Date(b.created_at)) {
        return 1;
      } else {
        return 0;
      }
    });

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

    if (this.state.favorited) {
      button = (
        <UnfavoriteButton photoId={this.props.params.photoId}
                          decrementFavoriteCount={this.decrementFavoriteCount} />
      )
    } else {
      button = (
        <FavoriteButton photoId={this.props.params.photoId}
                        incrementFavoriteCount={this.incrementFavoriteCount} />
      )
    };

    if (Object.keys(currentPhoto).length > 0) {
      var currentPhotoUrl = currentPhoto.photo_url;
      return (
        <div>
          <div>
            <div className="photo-detail-photo">
              <img src={url + photo_options + currentPhotoUrl}></img>
              <div className="scroller">
                {thumbnails.map(function (photo) {
                  return <img key={photo.id}
                              data-userid={photo.user_id}
                              data-photoid={photo.id}
                              className={photo.id === currentPhoto.id ? "scroller-thumbnail-active" : "scroller-thumbnail"}
                              onClick={that.handleThumbnailClick}
                              src={url + thumbnail_options + photo.photo_url}></img>
                })}
              </div>
              <span className="previous" onClick={this.handlePreviousClick}><i className="fa fa-angle-left"></i></span>
              <span className="next" onClick={this.handleNextClick}><i className="fa fa-angle-right"></i></span>
              { button }
              <span className="favorite-count">{this.state.favoriteCount}</span>
            </div>
          </div>
          <br/>

          <div className="container">
            <div className="row">

            <div className="col-md-1" />

            <div className="col-md-5">
              <div className="photo-detail-info">
                <div>
                  <h3 className="photo-title">{currentPhoto.title}</h3>
                  {currentPhoto.description}
                </div>
                <br/>
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
                <br/>
                { commentForm }
                <br/><br/>
              </div>
            </div>

            <div className="col-md-1" />

            <div className="col-md-4">
              <div className="about-the-photographer">
                <h4>About the photographer</h4>
                <span onClick={this.handleClick}
                      className="comment-author">{currentPhoto.user.username}
                      </span> - {currentPhoto.user.full_name}
                <br/>
                {currentPhoto.user.summary}
              </div>
            </div>

            <div className="col-md-1" />

            </div>
          </div>
        </div>
      );
    } else {
      return ( <div></div> );
    }
  }
});

module.exports = PhotoDetail;
