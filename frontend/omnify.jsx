var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    App = require('./components/app.jsx'),
    FeedMain = require('./components/show/feed_main.jsx'),
    Splash = require('./components/show/splash.jsx'),
    PhotoDetail = require('./components/show/photo_detail.jsx'),
    UploadPhotoForm = require('./components/sidebar/upload_photo_form.jsx');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />
    <Route path="/photos" component={FeedMain} />
    <Route path="/users/:userId/photos/new" component={UploadPhotoForm} />
    <Route path="/users/:userId/photos/:photoId" component={PhotoDetail} />

  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
