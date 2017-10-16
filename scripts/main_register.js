(function(window) {
  'use strict';

  var FORM_SELECTOR = '[data-user="form"]';
  var SERVER_URL_POSTINGS = 'http://localhost:2403/postings';
  var SERVER_URL_USERS = 'http://localhost:2403/users';

  var App = window.App;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var User = App.User;
  var Posting = App.Posting;
  var remoteDSPostings = new RemoteDataStore(SERVER_URL_POSTINGS);
  var remoteDSUsers = new RemoteDataStore(SERVER_URL_USERS);

  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function(data) {
    remoteDSUsers.add(data.id, data);
    window.location.replace("http://localhost:3000/");
  });

})(window);
