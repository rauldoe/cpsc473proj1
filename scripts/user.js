(function(globalObj){
  "use strict";

  var App = globalObj.App || {};

  function User(uid, username, firstName, lastName, password, email) {

    this.uid = uid;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
  }

  User.prototype.login = function(password) {

    return (this.password === password);
  };

  App.User = User;
  globalObj.App = App;

})(window);
