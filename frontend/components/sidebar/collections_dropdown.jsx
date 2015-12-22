var React = require('react'),
    CollectionsDropdownItem = require('./collections_dropdown_item.jsx'),
    ApiUtil = require('../../util/api_util.js');

var CollectionsDropdown = React.createClass({
  getInitialState: function () {
    return { collection: "All" }
  },
  selectCollection: function (collection) {
    this.setState({ collection: collection })
  },
  render: function () {
    var that = this;
    var collections = ["All", "People", "Technology", "Nature",
                       "Places", "Red", "Orange", "Yellow", "Green",
                       "Blue", "Purple", "Brown", "White", "Black"];

    return (
      <li className="dropdown">
        <a className="dropdown-toggle"
           data-toggle="dropdown"
           role="button"
           aria-haspopup="true"
           aria-expanded="false">COLLECTION: {this.state.collection}<span className="caret"></span>
        </a>
        <ul className="dropdown-menu" id="collections-dropdown">
          {
            collections.map(function (collection, idx) {
              return <CollectionsDropdownItem key={idx}
                                              position={idx}
                                              collection={collection}
                                              selectCollection={that.selectCollection} />
            })
          }
        </ul>
      </li>
    );
  }
});

module.exports = CollectionsDropdown;
