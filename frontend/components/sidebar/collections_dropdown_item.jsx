var React = require('react'),
    CollectionActions = require('../../actions/collection_actions.js'),
    CollectionStore = require('../../stores/collection_store.js'),
    History = require('react-router').History;

var CollectionsDropdownItem = React.createClass({
  mixins: [History],
  onClick: function (e) {
    CollectionActions.updateCollection(this.props.collection);
    this.props.selectCollection(e.target.innerHTML)
    this.history.pushState(null, "/photos", {});
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
