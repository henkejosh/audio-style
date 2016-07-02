const React = require('react');
const SongIndexItem = require('./song_index_item.jsx');

const SongIndex = React.createClass({
  render: function() {
    return (
        <div className="songIndex">
          <SongIndexItem />
        </div>
      );
  }
});

module.exports = SongIndex;
