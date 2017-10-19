(function(globalObj){
  "use strict";

  var App = globalObj.App || {};

  function User(id, userName, firstName, lastName, password, email) {

    this.id = id;
    this.userName = username;
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
