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
            <img src="http://f.cl.ly/items/3o1I112P3y371p262D3j/headphones%20(2).png"/>
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
