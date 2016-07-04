const AlbumApiUtil = require('../util/album_api_util.js');

const AlbumActions = {
  fetchSpotifyAlbum: function(albumURI) {
    AlbumApiUtil.fetchSpotifyAlbum(albumURI, AlbumApiUtil.addAlbumToDB,
      AlbumApiUtil.addSongToDB);
  }
};

module.exports = AlbumActions;
