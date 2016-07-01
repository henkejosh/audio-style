const React = require('react');
const ReactDOM = require('react-dom');
const LeftNav = require('./left_nav.jsx');
const RightNav = require('./right_nav.jsx');

const Header = React.createClass({
  render: function() {
    return (
      <nav>
        <LeftNav props={this.props.props}/>
        <RightNav props={this.props.props}/>
      </nav>
    );
  }
});

module.exports = Header;
