(function(window) {
  'use strict';

  var FORM_SELECTOR = '[data-posting="form"]';
  var SERVER_URL_POSTINGS = 'http://localhost:2403/postings';
  var SERVER_URL_USERS = 'http://localhost:2403/users';

  var App = window.App;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var User = App.User;
  var Posting = App.Posting;
  var remoteDSPostings = new RemoteDataStore(SERVER_URL_POSTINGS);
  var remoteDSUsers = new RemoteDataStore(SERVER_URL_USERS);

  var users = [];

  remoteDSUsers.getAll(function(i){users = i;});

  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function(data) {
    var user = users.find(function(i){return i.userName === data.userName && i.password === data.password});

    if (user) {
      window.location.replace("http://localhost:2403/landing.html")
    }
  });

  //formHandler.addInputHandler(Validation.isEmail);

  console.log(formHandler);
})(window);
