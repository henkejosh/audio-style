
const SessionApiUtil = {
  signup: function(user, success, error) {
    $.ajax({
      url: "api/users",
      type: "POST",
      data: { user },
      dataType: "json",
      success,
      error
    });
  },

  login: function(user, success, error) {
    $.ajax({
      url: "api/session",
      type: "POST",
      data: { user },
      dataType: "json",
      success,
      error
    });
  },

  logout: function(user, success, error) {
    $.ajax({
      url: `api/session/${user.id}`,
      type: "DELETE",
      data: { user },
      dataType: "json",
      success,
      error
    });
  },
}

module.exports = SessionApiUtil;
