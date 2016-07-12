
const CommentApiUtil = {
  fetchSongComments: function (songID, successCB) {
    $.ajax({
      type: "GET",
      url: `api/songs/${songID}/comments`,
      dataType: "json",
      success: function(comments) {
        successCB(comments);
      },
      error: function() {
        console.log("error retreiving comments!");
      }
    });
  },

  createSongComment: function(songID, comment, successCB) {
    $.ajax({
      type: "POST",
      url: `api/songs/${songID}/comments`,
      data: { comment },
      success: function(aComment) {
        successCB(aComment);
      },
      error: xhr => {
        const errors = xhr.responseJSON;
        console.log(errors);
      }
    });
  }
};

module.exports = CommentApiUtil;
