export default {
    saveSession(obj) {
        sessionStorage.setItem("session", JSON.stringify(obj));
        return true;
      },
      sessionUserSelect(obj) {
        sessionStorage.setItem("session_user_select", JSON.stringify(obj));
        return true;
      },
    saveLocalSession(obj) {
        localStorage.setItem("session", JSON.stringify(obj));
        return true;
      },

    getSession() {
        var obj = {};
        if (typeof sessionStorage.session !== "undefined") {
          obj = JSON.parse(sessionStorage.session);
        }
        return obj;
      }
}