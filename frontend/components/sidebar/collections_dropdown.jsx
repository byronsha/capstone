var React = require('react'),
    CollectionsDropdownItem = require('./collections_dropdown_item.jsx'),
    ApiUtil = require('../../util/api_util.js');

var CollectionsDropdown = React.createClass({
  render: function () {
    var collections = ["All", "People", "Technology", "Nature",
                       "Places", "Red", "Orange", "Yellow", "Green",
                       "Blue", "Purple","White", "Black"];

    return (
      <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">COLLECTIONS <span className="caret"></span></a>
        <ul className="dropdown-menu">
          {
            collections.map(function (collection, idx) {
              return <CollectionsDropdownItem key={idx}
                                              position={idx}
                                              collection={collection} />
            })
          }
        </ul>
      </li>
    );
  }
});

module.exports = CollectionsDropdown;
