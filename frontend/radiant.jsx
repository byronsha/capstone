var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    App = require('./components/app.jsx'),
    FeedMain = require('./components/show/feed_main.jsx'),
    PhotoDetail = require('./components/show/photo_detail.jsx');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={FeedMain} />
    <Route path="photos/:photoId" component={PhotoDetail} />

  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
