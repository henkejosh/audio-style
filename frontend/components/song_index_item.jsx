const React = require('react');

const SongIndexItem = React.createClass({
  render: function() {
    return (
      <figure>

        <img alt="Crooked Rain, Crooked Rain"
          src="http://f.cl.ly/items/2I0M121z2b1A0Q3X0y2S/220px-Pavement_Crooked_Rain.jpg"/>

        <section className="song">

          <div>
            <button>Play</button>
            <ul>
              <li>Song Title</li>
              <li>Artist</li>
              <li>Album</li>
            </ul>
          </div>

          <ul>
            <li>Comment button</li>
            <li>Like button</li>
          </ul>
        </section>
      </figure>
    );
  }
});

module.exports = SongIndexItem;
