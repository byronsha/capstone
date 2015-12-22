var React = require('react'),
    History = require('react-router').History,
    SessionStore = require('../../stores/session_store.js');

var YouButton = React.createClass({
  mixins: [History],
  handleClick: function (e) {
    e.preventDefault();

    currentUser = SessionStore.currentUser();
    this.history.pushState(null, "/users/" + currentUser.id, {});
  },
  render: function () {
    return (
      <li><a onClick={this.handleClick}>YOU</a></li>
    );
  }
});

module.exports = YouButton;
