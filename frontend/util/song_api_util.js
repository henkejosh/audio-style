

const SongApiUtil = {
  getAllSongs: function(successCB) {
    $.ajax({
      type: "GET",
      url: "api/songs",
      dataType: "JSON",
      success: function(songs) {
        // returns array of songs
        successCB(songs);
      },
      error: () => {
        console.log("Get songs error");
      }
    });
  },

  getSongs: function(params, successCB) {
  }
};

module.exports = SongApiUtil;
