const React = require('react');

const LeftNav = React.createClass({
  render: function() {
    return (
        <ul className="left-nav">
          <li className="logo">
            <img src="http://f.cl.ly/items/0G3J0q3o0q0s252U4021/headphones%20(1).png"/>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Collection</a>
          </li>
        </ul>
    );
  }
});

module.exports = LeftNav;
