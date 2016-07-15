const React = require('react');
const hashHistory = require('react-router').hashHistory;


const LeftNav = React.createClass({
  goToHome: function(e) {
    e.preventDefault();
    hashHistory.replace("/songs");
  },

  render: function() {
    return (
        <ul className="left-nav">
          <li className="logo">
            <img src="https://s3.amazonaws.com/f.cl.ly/items/0G3J0q3o0q0s252U4021/headphones%20(1).png"/>
          </li>
          <li>
            <a onClick={this.goToHome}>Home</a>
          </li>
          <li>
            <a href="">Collection</a>
          </li>
        </ul>
    );
  }
});

module.exports = LeftNav;
