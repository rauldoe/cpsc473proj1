(function(globalObj){
  "use strict";

  var App = globalObj.App || {};

  function User(uid, username, firstName, lastName, password){
    this.uid = uid;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }

  User.prototype.changeVote = function(forId){
    this.forId = forId;
  };

  App.User = User;
  globalObj.App = App;

})(window);
