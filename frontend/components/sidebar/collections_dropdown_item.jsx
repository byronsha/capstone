var React = require('react');

var CollectionsDropdownItem = React.createClass({
  onClick: function () {
    console.log("You chose " + this.props.collection);
  },
  render: function () {
    if (this.props.position === 0) {
      return (
        <div>
          <li className="collection-dropdown-item" onClick={this.onClick}>{this.props.collection}</li>
        </div>
      );
    } else {
      return (
        <div>
          <li role="separator" className="divider"></li>
          <li className="collection-dropdown-item" onClick={this.onClick}>{this.props.collection}</li>
        </div>
      );
    }
  }
});

module.exports = CollectionsDropdownItem;
