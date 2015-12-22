var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    SessionsUtil = require('../../util/sessions_util.js'),
    UiStore = require("../../stores/ui_store.js"),
    History = require('react-router').History;

var LoginButton = React.createClass({
  mixins: [History, LinkedStateMixin],
  getInitialState: function () {
    return ({
      username: "",
      password: "",
      flash: ""
    });
  },
  componentDidMount: function () {
    this.uiListener = UiStore.addListener(this._onUiChange);
  },
  _onUiChange: function () {
    var newFlash = UiStore.flash();
    if (newFlash !== this.state.flash) {
      this.setState({ flash: newFlash });
    }
  },
  handleSubmit: function (e) {
    e.preventDefault();

    var loginParams = {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    };

    this.setState({ username: "", password: "" });
    SessionsUtil.login(loginParams);
    // this.history.pushState(null, "/photos", {});
  },
  render: function () {
    return (
      <li className="dropdown">
        <a className="dropdown-toggle"
           data-toggle="dropdown"
           role="button"
           aria-haspopup="true"
           aria-expanded="false">LOG IN <span className="caret"></span>
        </a>

        <div className="dropdown-menu" id="login-dropdown">

          <form>
            <div className="col-md-12">
              <div className="login-username-input">
                <input type="text"
                       valueLink={this.linkState("username")}
                       placeholder="Username"
                       className="form-control input-sm" />
              </div>
            </div>

            <div className="col-md-12">
              <div className="login-password-input">
                <input type="password"
                       valueLink={this.linkState("password")}
                       placeholder="Password"
                       className="form-control input-sm" />
              </div>
            </div>

            <div className="col-md-12">
              <div className="login-submit-button">
                <button type="submit"
                        className="btn btn-success btn-sm"
                        onClick={this.handleSubmit}>Log in</button>

                <span className="flash-error">{this.state.flash}</span>
              </div>
            </div>
          </form>

        </div>
      </li>
    )
  }
});

module.exports = LoginButton;
