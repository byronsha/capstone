var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    UserStore = require('../../stores/user_store.js');

var Summary = React.createClass({
  getInitialState: function () {
    return { user: {} }
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onUserChange);
    ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  _onUserChange: function () {
    this.setState({ user: UserStore.user() });
  },
  render: function () {
    if (Object.keys(this.state.user).length > 0) {
      return (
        <div>
          {this.state.user.summary}
        </div>
      )
    } else {
      return (<div></div>);
    }
  }
});

module.exports = Summary;
