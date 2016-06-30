
const SessionApiUtil = {
  signup: function(user, success, error) {
    $.ajax({
      url: "api/users",
      type: "POST",
      data: { user },
      dataType: "json",
      success,
      error: xhr => {
        const errors = xhr.responseJSON;
        error("signup", errors);
      }
    });
  },

  login: function(user, success, error) {
    $.ajax({
      url: "api/session",
      type: "POST",
      data: { user },
      dataType: "json",
      success,
      error: xhr => {
        const errors = xhr.responseJSON;
        error("login", errors);
      }
    });
  },

  logout: function(user, success, error) {
    $.ajax({
      url: `api/session/${user.id}`,
      type: "DELETE",
      data: { user },
      dataType: "json",
      success,
      error: () => {
        console.log("SessionApiUtil#logout error");
      }
    });
  },
};

module.exports = SessionApiUtil;
