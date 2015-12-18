var React = require('react');

var LoginButton = React.createClass({
  getInitialState: function () {
    return ({
      username: "",
      password: ""
    });
  },
  handleSubmit: function (e) {
    e.preventDefault();

    var registrationParams = {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    };

    console.log("login button");
    console.log(registrationParams);
    // RegistrationApiUtil.signUp(registrationParams);
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
           aria-expanded="false">LOG IN <span className="caret"></span>
        </a>

        <div className="dropdown-menu">

          <div className="col-sm-12">
            <div className="login-username-input">
              <input type="text"
                     placeholder="Username"
                     className="form-control input-sm"
                     onChange={this.usernameChange} />
            </div>
          </div>

          <br/>

          <div className="col-sm-12">
            <div className="login-password-input">
              <input type="password"
                     placeholder="Password"
                     className="form-control input-sm"
                     onChange={this.passwordChange} />
            </div>
          </div>

          <div className="col-sm-12">
            <div className="login-submit-button">
              <button type="submit"
                      className="btn btn-success btn-sm"
                      onClick={this.handleSubmit}>Log in</button>
            </div>
          </div>

        </div>
      </li>
    )
  }
});

module.exports = LoginButton;
