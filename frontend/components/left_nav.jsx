const React = require('react');
const ReactDOM = require('react-dom');

const LeftNav = React.createClass({
  render: function() {
    return (
        <ul>
          <li>
            Logo coming here
          </li>
          <li>
            <a href="#">Stream</a>
          </li>
          <li>
            <a href="#">Search Component</a>
          </li>
        </ul>
    );
  }
});

module.exports = LeftNav;
