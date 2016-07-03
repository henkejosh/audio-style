const React = require('react');

const SongIndexItem = React.createClass({
  render: function() {
    return (
      <figure>

        <img alt={this.props.song.album_name}
          src={this.props.song.image_url}/>

        <section className="song">

          <div>
            <button>Play</button>
            <ul className="song-info">
              <li>{this.props.song.title}</li>
              <li>{this.props.song.artist_name}</li>
              <li>{this.props.song.album_name}</li>
            </ul>
          </div>

          <ul className="song-button-feats">
            <li>Comment</li>
            <li>Like</li>
            <li>Add to PL</li>
          </ul>
        </section>
      </figure>
    );
  }
});

module.exports = SongIndexItem;
