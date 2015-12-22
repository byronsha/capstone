var React = require('react'),
    SessionsUtil = require('../../util/sessions_util.js');

var Signup = React.createClass({
  getInitialState: function () {
    return ({
      username: "",
      password: ""
    });
  },
  handleSubmit: function (e) {
    e.preventDefault();

    var signupParams = {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    };

    SessionsUtil.signup(signupParams);
  },
  usernameChange: function (e) {
    this.setState({ username: e.target.value });
  },
  passwordChange: function (e) {
    this.setState({ password: e.target.value });
  },
  render: function () {
    return (
      <li className="dropdown">
        <a className="dropdown-toggle"
           data-toggle="dropdown"
           role="button"
           aria-haspopup="true"
           aria-expanded="false">SIGN UP <span className="caret"></span>
        </a>

        <div className="dropdown-menu" id="signup-dropdown">

          <form>
            <div className="col-md-12">
              <div className="login-username-input">
                <input type="text"
                       placeholder="Username"
                       className="form-control input-sm"
                       onChange={this.usernameChange} />
              </div>
            </div>

            <div className="col-md-12">
              <div className="login-password-input">
                <input type="password"
                       placeholder="Password"
                       className="form-control input-sm"
                       onChange={this.passwordChange} />
              </div>
            </div>

            <div className="col-md-12">
              <div className="login-submit-button">
                <button type="submit"
                        className="btn btn-success btn-sm"
                        onClick={this.handleSubmit}>Sign up</button>
              </div>
            </div>
          </form>

        </div>
      </li>
    )
  }
});

module.exports = Signup;
