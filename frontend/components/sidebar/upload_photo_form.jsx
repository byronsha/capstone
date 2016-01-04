var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    SessionStore = require('../../stores/session_store.js'),
    ApiUtil = require('../../util/api_util.js'),
    UploadPhotoButton = require('./upload_photo_button.jsx'),
    History = require('react-router').History;

var UploadPhotoForm = React.createClass({
  mixins: [History, LinkedStateMixin],
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
    this.history.pushState(null, "/users/" + currentUser.id + "/photoIndex", {});
  },
  render: function () {
    var url = "http://res.cloudinary.com/dwx2ctajn/image/upload/";
    var photoOptions = "w_560,c_scale/";
    var uploadedPhoto;

    if (this.state.photoUrl.length > 1) {
      uploadedPhoto = (
        <div>
          Preview:
          <br/>
          <img src={url + photoOptions + this.state.photoUrl}></img>
        </div>
      )
    } else {
      uploadedPhoto = (
        <UploadPhotoButton savePhotoUrl={this.savePhotoUrl}
                           showUploadedThumbnail={this.showUploadedThumbnail} />
      )
    };

    return uploadForm = (
      <div className="upload-form-container">
        <form onSubmit={this.handleSubmit} id="photo-form">

          <br/><br/>

          <div className="create-photo-title">
            <input type="text"
                   valueLink={this.linkState("title")}
                   placeholder="Title"
                   className="form-control input-sm" />
          </div>

          <br/><br/>

          <div className="create-photo-description">
            <textarea form="photo-form"
                      rows="5"
                      valueLink={this.linkState("description")}
                      placeholder="Description"
                      className="form-control input-sm" />
          </div>

          <br/><br/>{ uploadedPhoto }<br/><br/>

          <div>
            <button type="submit"
                    className="btn btn-success btn-sm">Submit</button>

            <span className="flash-error">{this.state.flash}</span>
          </div>
          
        </form>
      </div>
    );
  }
});

module.exports = UploadPhotoForm;

// if (this.state.photoUrl.length > 1) {
//   return (
//     <div>
//       { uploadForm }
//       <div className="photo-preview">
//         Preview:
//         <br/>
//         <img src={url + photoOptions + this.state.photoUrl}></img>
//       </div>
//     </div>
//   )
// } else {
//   return (
//     <div>
//       { uploadForm }
//     </div>
//   )
// };
