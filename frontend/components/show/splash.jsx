var React = require('react');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Splash = React.createClass({
  getInitialState: function () {
    return { transitionImage: 0 };
  },
  componentDidMount: function () {
    this.transitionInterval = setInterval(this.cycleImage, 4000)
  },
  componentWillUnmount: function () {
    clearInterval(this.transitionInterval);
  },
  cycleImage: function () {
    if (this.state.transitionImage === 4) {
      this.setState({ transitionImage: 0 })
    } else {
      this.setState({ transitionImage: this.state.transitionImage + 1 })
    }
  },
  render: function () {
    var url = "http://res.cloudinary.com/dwx2ctajn/image/upload/";
    var photo_options = "c_scale,w_2500/";
    var currentTransitionImage;

    switch(this.state.transitionImage) {
      case 0:
        currentTransitionImage = (
          <div key="a" className="splash-image">
            <img id="photo-85" src={url + photo_options + "85.jpg"}></img>
            <span className="introduction">The home for all your photos</span>
          </div>
        );
        break;
      case 1:
        currentTransitionImage = (
          <div key="b" className="splash-image">
            <img id="photo-9" src={url + photo_options + "9.jpg"}></img>
            <span className="introduction">The home for all your photos</span>
          </div>
        );
        break;
      case 2:
        currentTransitionImage = (
          <div key="c" className="splash-image">
            <img id="photo-5" src={url + photo_options + "5.jpg"}></img>
            <span className="introduction">The home for all your photos</span>
          </div>
        );
        break;
      case 3:
        currentTransitionImage = (
          <div key="d" className="splash-image">
            <img id="photo-22" src={url + photo_options + "22.jpg"}></img>
            <span className="introduction">The home for all your photos</span>
          </div>
        );
        break;
      case 4:
        currentTransitionImage = (
          <div key="e" className="splash-image">
            <img id="photo-36" src={url + photo_options + "36.jpg"}></img>
            <span className="introduction">The home for all your photos</span>
          </div>
        );
        break;
    };

    return (
      <div>
        <div className="transition-container">
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={0} transitionLeaveTimeout={0}>
            { currentTransitionImage }
          </ReactCSSTransitionGroup>
        </div>
        <div className="splash-main-2">
          <span className="introduction-2">Inspire others with your creativity...</span>
        </div>
        <div className="splash-main-3">
          <span className="introduction-3">...and discover breathtaking sights from around the world</span>
        </div>
      </div>
    );
  }
});

module.exports = Splash;
