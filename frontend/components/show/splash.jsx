var React = require('react'),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Splash = React.createClass({
  // getInitialState: function () {
  //   return { transitionImage: 0 };
  // },
  componentDidMount: function () {
    window.scrollTo(0,0);
  },
  render: function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var backgroundImageMain = { backgroundImage: "url('http://res.cloudinary.com/dwx2ctajn/image/upload/w_" + w + ",h_" + h + ",c_fill/" + "101.jpg" + "')" };
    var backgroundImageSmallOne = { backgroundImage: "url('http://res.cloudinary.com/dwx2ctajn/image/upload/w_" + w + ",h_" + h + ",c_fill/" + "104.jpg" + "')" };
    var backgroundImageSmallTwo = { backgroundImage: "url('http://res.cloudinary.com/dwx2ctajn/image/upload/w_" + w + ",h_" + h + ",c_fill/" + "119.jpg" + "')" };
    var backgroundImageSmallThree = { backgroundImage: "url('http://res.cloudinary.com/dwx2ctajn/image/upload/w_" + w + ",h_" + h + ",c_fill/" + "120.jpg" + "')" };

    return (
      <div>
        <div className="splash-container" style={ backgroundImageMain }>
          <div className="splash-text-container">
            <span className="splash-text-major">Your online photo collection</span><br/>
            <span className="splash-text-minor">Share your favorite memories. Showcase your photos. Access anytime, from anywhere.</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Splash;

// <div className="splash-row">
//   <div className="splash-main small" style={ backgroundImageSmallOne }>
//     <span></span>
//   </div>
//   <div className="splash-main small" style={ backgroundImageSmallTwo }>
//     <span></span>
//   </div>
//   <div className="splash-main small" style={ backgroundImageSmallThree }>
//     <span></span>
//   </div>
// </div>
//
// <div className="splash-main two">
//   <span className="introduction-2">Inspire others with your creativity...</span>
// </div>
// <div className="splash-main three">
//   <span className="introduction-3">...and discover breathtaking sights from around the world</span>
// </div>

// -----

// componentDidMount: function () {
//   this.transitionInterval = setInterval(this.cycleImage, 3000)
// },
// componentWillUnmount: function () {
//   clearInterval(this.transitionInterval);
// },
// cycleImage: function () {
//   if (this.state.transitionImage === 4) {
//     this.setState({ transitionImage: 0 })
//   } else {
//     this.setState({ transitionImage: this.state.transitionImage + 1 })
//   }
// },

// var currentTransitionImage;

// switch(this.state.transitionImage) {
//   case 0:
//     currentTransitionImage = (
//       <div key="a" className="splash-image">
//         <img src={url + photo_options + "85.jpg"}></img>
//         <span className="introduction">The home for all your photos</span>
//       </div>
//     );
//     break;
//   case 1:
//     currentTransitionImage = (
//       <div key="b" className="splash-image">
//         <img src={url + photo_options + "9.jpg"}></img>
//         <span className="introduction">The home for all your photos</span>
//       </div>
//     );
//     break;
//   case 2:
//     currentTransitionImage = (
//       <div key="c" className="splash-image">
//         <img src={url + photo_options + "5.jpg"}></img>
//         <span className="introduction">The home for all your photos</span>
//       </div>
//     );
//     break;
//   case 3:
//     currentTransitionImage = (
//       <div key="d" className="splash-image">
//         <img src={url + photo_options + "22.jpg"}></img>
//         <span className="introduction">The home for all your photos</span>
//       </div>
//     );
//     break;
//   case 4:
//     currentTransitionImage = (
//       <div key="f" className="splash-image">
//         <img src={url + photo_options + "36.jpg"}></img>
//         <span className="introduction">The home for all your photos</span>
//       </div>
//     );
//     break;
// };
//
// <div className="transition-container">
//   <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={0} transitionLeaveTimeout={0}>
//     { currentTransitionImage }
//   </ReactCSSTransitionGroup>
// </div>
