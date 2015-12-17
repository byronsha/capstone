var React = require('react');

var CollectionsDropdownItem = React.createClass({
  onClick: function () {
    console.log("You clicked " + this.props.collection);
  },
  render: function () {
    return (
      <div>
        <li onClick={this.onClick}>{this.props.collection}</li>
        <li role="separator" className="divider"></li>
      </div>
    );
  }
});

module.exports = CollectionsDropdownItem;
