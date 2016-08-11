
// http://ws.spotify.com/search/1/artist?q=foo


const SpotifyApiUtil = {
  fetchZeppelinSongs: function(successCB) {
    $.ajax({
      url: "https://api.spotify.com/v1/search?q=led%20zeppelin&type=track",
      type: "GET",
      dataType: "JSON",
      success: function(songs) {
        successCB(songs);
      },
      error: xhr => {
        const errors = xhr.responseJSON;
        console.log(errors);
      }
    });
  }

  // signup: function(user, success, error) {
  //   $.ajax({
  //     url: "api/users",
  //     type: "POST",
  //     data: { user },
  //     dataType: "json",
  //     success,
  //     error: xhr => {
  //       const errors = xhr.responseJSON;
  //       error("signup", errors);
  //     }
  //   });
  // },
  //
  // login: function(user, success, error) {
  //   $.ajax({
  //     url: "api/session",
  //     type: "POST",
  //     data: { user },
  //     dataType: "json",
  //     success,
  //     error: xhr => {
  //       const errors = xhr.responseJSON;
  //       error("login", errors);
  //     }
  //   });
  // },
  //
  // logout: function(success) {
  //   $.ajax({
  //     url: "api/session",
  //     type: "DELETE",
  //     dataType: "json",
  //     success,
  //     error: (data) => {
  //       console.log("SpotifyApiUtil#logout error");
  //     }
  //   });
  // },
};

module.exports = SpotifyApiUtil;
