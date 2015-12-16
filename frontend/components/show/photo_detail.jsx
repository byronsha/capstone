var React = require('react'),
    PhotoStore = require('../../stores/photo_store.js'),
    PhotoComment = require('./photo_comment.jsx');

var PhotoDetail = React.createClass({
  render: function () {
    var currentPhoto = PhotoStore.find(this.props.params.photoId);
    var currentPhotoUrl = currentPhoto.photo_url,
        url = "http://res.cloudinary.com/dwx2ctajn/image/upload/",
        photo_options = "w_750,h_400,c_fill/";

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
          <div className="col-md-12">
            <h3>Comments</h3>
            <ul>
              {currentPhoto.comments.map(function (comment) {
                return <PhotoComment key={comment.id}
                                     author={comment.username}
                                     body={comment.body}
                                     createdAt={comment.created_at} />;
              })}
            </ul>
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-md-12">
            // comment form goes here
          </div>
        </div>

      </div>
    );
  }
});

module.exports = PhotoDetail;
