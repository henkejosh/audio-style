const React = require('react');
const hashHistory = require('react-router').hashHistory;


const LeftNav = React.createClass({
  goToHome: function(e) {
    e.preventDefault();
    hashHistory.replace("/");
  },

  render: function() {
    return (
        <ul className="left-nav">
          <li className="logo">
            <img src="https://s3.amazonaws.com/f.cl.ly/items/3u0v3m0i332Y1P1H3Y1I/compact-disc.png"/>
          </li>
          <li>
            <a onClick={this.goToHome}>Home</a>
          </li>
        </ul>
    );
  }
});

module.exports = LeftNav;
