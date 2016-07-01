const React = require('react');

const LeftNav = React.createClass({
  render: function() {
    return (
        <ul className="left-nav">
          <li className="logo">
            <img src="http://f.cl.ly/items/1o0i3F2Y412W2z0i3J3g/youtube-music-logo.jpg"/>
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
