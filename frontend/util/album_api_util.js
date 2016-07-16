const AlbumApiUtil = {
  addAlbumToDB: function(album) {
    $.ajax({
      type: "POST",
      url: "api/albums",
      data: {
        album: {
          artist_id: 3,
          spotify_uri: album.uri,
          title: album.name,
          image_url: album.images[0].url
        }
      },
      dataType: "json",
      success: function(data) {
        console.log("success - added album");
      },
      error: function() {
        console.log("error - did no add album");
      }
    });
  },

  addSongToDB: function(song, albumID) {
    $.ajax({
      type: "POST",
      url: "api/songs",
      data: {
        song: {
          title: song.name,
          spotify_uri: song.uri,
          album_id: albumID,
          duration: song.duration_ms,
          spotify_preview: song.preview_url
        }
      },
      dataType: "json",
      success: function(data) {
        console.log("success - added song");
      },
      error: function() {
        console.log("error - did not add song");
      }
    });
  },

  fetchSpotifyAlbum: function(albumURI, addAlbum, addSong) {
    $.ajax({
      type: "GET",
      url: `https://api.spotify.com/v1/albums/${albumURI}`,
      success: function(album) {
        addAlbum(album);
        album.tracks.items.forEach( song => {
          addSong(song, 1);
        });
      },
      error: function() {
        console.log("didn't work");
      }
    });
  }
};

// exile on main street URI= 5U4dnRZsfW8NmwBBkELFPh
module.exports = AlbumApiUtil;
