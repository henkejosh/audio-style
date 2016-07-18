const React = require('react');

const HomePage = React.createClass({
  render: function() {
    return(
      <div className="home-page">
        <img className="home-album-pic"
          src="https://res.cloudinary.com/dg2yejdpt/image/upload/v1467739480/a_-_Front_lscrcq.jpg"/>
      </div>
    );
  }
});

module.exports = HomePage;
