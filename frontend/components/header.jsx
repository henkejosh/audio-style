const React = require('react');
const ReactDOM = require('react-dom');
const LeftNav = require('./left_nav.jsx');
const RightNav = require('./right_nav.jsx');

const Header = React.createClass({
  render: function() {
    return (
      <nav>
        <LeftNav/>
        <RightNav/>
        Header here
      </nav>
    );
  }
});

module.exports = Header;
