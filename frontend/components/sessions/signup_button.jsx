var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    SessionsUtil = require('../../util/sessions_util.js'),
    UiStore = require("../../stores/ui_store.js"),
    UiActions = require('../../actions/ui_actions.js');

var Signup = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return ({
      username: "",
      full_name: "",
      password: "",
      confirmation: "",
      flash: ""
    });
  },
  componentDidMount: function () {
    this.uiListener = UiStore.addListener(this._onUiChange);
  },
  _onUiChange: function () {
    var newFlash = UiStore.signupFlash();
    if (newFlash !== this.state.flash) {
      this.setState({ flash: newFlash });
    }
  },
  handleSubmit: function (e) {
    e.preventDefault();

    if (this.state.password !== this.state.confirmation) {
      UiActions.setSignupFlash("Passwords did not match");
      this.setState({ password: "", confirmation: "" });
    } else {
      var signupParams = {
        user: {
          username: this.state.username,
          full_name: this.state.full_name,
          password: this.state.password,
          confirmation: this.state.confirmation
        }
      };

      this.setState({ password: "", confirmation: "" });
      SessionsUtil.signup(signupParams);
    };
  },
  render: function () {
    return (
      <li className="dropdown">
        <a className="dropdown-toggle"
           data-toggle="dropdown"
           role="button"
           aria-haspopup="true"
           aria-expanded="false">Sign up <i className="fa fa-angle-down"></i>
        </a>

        <div className="dropdown-menu" id="signup-dropdown">

          <form>
            <div className="col-md-12">
              <div className="login-input">
                <input type="text"
                       placeholder="Username"
                       className="form-control input-sm"
                       valueLink={this.linkState("username")} />
              </div>
            </div>

            <div className="col-md-12">
              <div className="login-input">
                <input type="text"
                       placeholder="Full name"
                       className="form-control input-sm"
                       valueLink={this.linkState("full_name")} />
              </div>
            </div>

            <div className="col-md-12">
              <div className="login-input">
                <input type="password"
                       placeholder="Password"
                       className="form-control input-sm"
                       valueLink={this.linkState("password")} />
              </div>
            </div>

            <div className="col-md-12">
              <div className="login-input">
                <input type="password"
                       placeholder="Confirm password"
                       className="form-control input-sm"
                       valueLink={this.linkState("confirmation")} />
              </div>
            </div>

            <div className="col-md-12">
              <div className="login-submit-button">
                <button type="submit"
                        className="btn btn-success btn-sm"
                        onClick={this.handleSubmit}>Sign up</button>

                      <span className="flash-error"><br/>{this.state.flash}</span>
              </div>
            </div>
          </form>

        </div>
      </li>
    )
  }
});

module.exports = Signup;
