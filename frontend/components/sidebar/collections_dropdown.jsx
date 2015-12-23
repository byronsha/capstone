var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    CollectionsDropdownItem = require('./collections_dropdown_item.jsx');

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

    for (var i = 0; i < collections.length; i++) {
      if (collections[i] === this.state.collection) {
        collections.splice(i, 1);
      }
    };

    return (
      <li className="dropdown">
        <a className="dropdown-toggle"
           data-toggle="dropdown"
           role="button"
           aria-haspopup="true"
           aria-expanded="false">Collection: {this.state.collection} <i className="fa fa-angle-down"></i>
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
