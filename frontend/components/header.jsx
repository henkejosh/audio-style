const React = require('react');
const ReactDOM = require('react-dom');
const LeftNav = require('./left_nav.jsx');
const RightNav = require('./right_nav.jsx');
const SearchIndex = require('./search_index.jsx');

const Header = React.createClass({
  render: function() {
    return (
      <nav className="header">
        <LeftNav props={this.props.props}/>
        <SearchIndex />
        <RightNav props={this.props.props}/>
      </nav>
    );
  }
});

module.exports = Header;
