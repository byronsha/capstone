var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    SessionStore = require('../../stores/session_store.js'),
    ApiUtil = require('../../util/api_util.js'),
    UploadPhotoButton = require('./upload_photo_button.jsx');

var UploadPhotoForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {
      title: "",
      description: "",
      photoUrl: "",
      flash: ""
    }
  },
  savePhotoUrl: function (photo) {
    this.setState({ photoUrl: photo[0].url.slice(61) });
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var currentUser = SessionStore.currentUser();

    var photoParams = {
      photo: {
        user_id: currentUser.id,
        title: this.state.title,
        description: this.state.description,
        photo_url: this.state.photoUrl
      }
    };

    ApiUtil.createPhoto(photoParams);
  },
  render: function () {
    // console.log(this.state.title);
    // console.log(this.state.description);
    // console.log(this.state.photo_url);
    var url = "http://res.cloudinary.com/dwx2ctajn/image/upload/",
        photoOptions = "w_500,h_282,c_fit/";

    var uploadForm = (
      <div className="container">

        <form onSubmit={this.handleSubmit} id="photo-form">

          <br/><br/>

          <div className="row">
            <div className="col-md-3">
              <div>
                <input type="text"
                       valueLink={this.linkState("title")}
                       placeholder="Title"
                       className="form-control input-sm" />
              </div>
            </div>
          </div>

          <br/><br/>

          <div className="row">
            <div className="col-md-5">
              <div>
                <textarea form="photo-form"
                          rows="5"
                          valueLink={this.linkState("description")}
                          placeholder="Description"
                          className="form-control input-sm" />
              </div>
            </div>
          </div>

          <br/><br/>

          <div className="row">
            <UploadPhotoButton savePhotoUrl={this.savePhotoUrl}
                               showUploadedThumbnail={this.showUploadedThumbnail} />
          </div>

          <br/><br/>

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

    if (this.state.photoUrl.length > 1) {
      return (
        <div>
          { uploadForm }
          <br/><br/><br/>

          <div className="container">
            <div className="row">
              <img src={url + photoOptions + this.state.photoUrl}></img>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          { uploadForm }
        </div>
      )
    };
  }
});

module.exports = UploadPhotoForm;
