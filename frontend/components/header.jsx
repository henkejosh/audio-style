const React = require('react');
const ReactDOM = require('react-dom');
const LeftNav = require('./left_nav.jsx');
const RightNav = require('./right_nav.jsx');
const SearchIndex = require('./search_index.jsx');

const Header = React.createClass({
  render: function() {
    return (
      <nav className="header">
        <LeftNav/>
        <RightNav/>
      </nav>
    );
  }
});

module.exports = Header;
