const React = require('react');

const SearchIndex = React.createClass({
  render: function() {
    return (
      <div className="search">
        <input type="text" value="...search"/>
      </div>
    );
  }
});

module.exports = SearchIndex;
