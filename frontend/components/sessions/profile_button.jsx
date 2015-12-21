var React = require('react');

var ProfileButton = React.createClass({
  onClick: function () {
    console.log("hello " + this.props.currentUser.username);
  },
  render: function () {
    return (
      <li className="dropdown">
        <a className="dropdown-toggle sidebar-button-text"
           data-toggle="dropdown"
           role="button" aria-haspopup="true"
           aria-expanded="false">You <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li>a</li>
          <li role="separator" className="divider"></li>
          <li>b</li>
          <li role="separator" className="divider"></li>
          <li>c</li>
          <li role="separator" className="divider"></li>
          <li>d</li>
        </ul>
      </li>
    );
  }
});

module.exports = ProfileButton;
