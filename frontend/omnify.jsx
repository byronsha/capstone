var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    App = require('./components/app.jsx'),
    FeedMain = require('./components/show/feed_main.jsx'),
    Splash = require('./components/show/splash.jsx'),
    PhotoDetail = require('./components/show/photo_detail.jsx'),
    UploadPhotoForm = require('./components/sidebar/upload_photo_form.jsx'),
    Summary = require('./components/users/summary.jsx'),
    PhotoIndex = require('./components/users/photo_index.jsx'),
    Favorites = require('./components/users/favorites.jsx'),
    Following = require('./components/users/following.jsx'),
    UserProfile = require('./components/users/user_profile.jsx');

var routes = (
  <Route path="/" component={App}>

    <IndexRoute component={Splash} />
    <Route path="/photos" component={FeedMain} />
    <Route path="/users/:userId/photos/:photoId" component={PhotoDetail} />

    <Route path="/users/:userId" component={UserProfile}>
      <Route path="summary" component={Summary} />
      <Route path="photoIndex" component={PhotoIndex} />
      <Route path="favorites" component={Favorites} />
      <Route path="following" component={Following} />
      <Route path="create" component={UploadPhotoForm} />
    </Route>

  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
