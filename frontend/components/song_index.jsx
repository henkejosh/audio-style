const React = require('react');
const SongIndexItem = require('./song_index_item.jsx');

const SongIndex = React.createClass({
  render: function() {
    return (
        <div>
          <SongIndexItem />
        </div>
      );
  }
});

module.exports = SongIndex;
