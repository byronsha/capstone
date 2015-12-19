var React = require("react");

var UploadPhotoButton = React.createClass({
  uploadImage: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY, function (error, result) {
      if (result.length > 1) {
        console.log("too many photos");
        // ui actions flash "upload 1 photo at a time"
      } else  {
        this.props.savePhotoUrl(result);
      }
    }.bind(this));
  },
  render: function () {
    return (
      <div>
        <button className="btn btn-sm"
                onClick={this.uploadImage}>Upload Image</button>
      </div>
    );
  }
});

module.exports = UploadPhotoButton;
