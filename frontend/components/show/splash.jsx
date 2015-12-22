var React = require('react');

var Splash = React.createClass({
  render: function () {
    return(
      <div>

        <div className="splash-main">
          <span className="introduction">The home for all your photos.</span>
        </div>

        <div className="splash-main-2">
          <span className="introduction-2">Inspire others with your creativity...</span>
        </div>

        <div className="splash-main-3">
          <span className="introduction-3">...and discover breathtaking sights from around the world.</span>
        </div>

      </div>
    );
  }
});

module.exports = Splash;
