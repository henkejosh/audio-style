
const CurrentSongApiUtil = {
  selectCurrentSong: function(songID, successCB) {
    $.ajax({
      type: "GET",
      url: `api/songs/${songID}`,
      dataType: "json",
      success: function(song) {
        successCB(song);
      },
      error: function() {
        console.log("Error fetching current song");
      }
    });
  },


};

module.exports = CurrentSongApiUtil;
