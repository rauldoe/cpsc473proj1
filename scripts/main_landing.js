(function(globalObj) {
  'use strict';

  var FORM_SELECTOR = '[data-posting="form"]';
  var SERVER_URL_POSTINGS = 'http://localhost:2403/postings';
  var SERVER_URL_USERS = 'http://localhost:2403/users';

  var App = globalObj.App || {};
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var User = App.User;
  var Posting = App.Posting;
  var PostingCard = App.PostingCard;


  function Main_landing() {
  }

  Main_landing.prototype.init = function() {
    var remoteDSPostings = new RemoteDataStore(SERVER_URL_POSTINGS);
    var remoteDSUsers = new RemoteDataStore(SERVER_URL_USERS);

    var postings = [];
    var postingListRoot = $(".row");
    var postingCardObj = new PostingCard(postingListRoot, "data-id");

    remoteDSPostings.getAll(function(i) {
      postings = i;

      postings.forEach(function(j){
        postingCardObj.addRow(j, function(k){
          window.location.replace("http://localhost:3000/posting.html?pid=" + k);
        });
      });

    });

  };


  App.Main_landing = Main_landing;
  globalObj.App = App;







/*
  var FORM_SELECTOR = '[data-posting="form"]';
  var SERVER_URL_POSTINGS = 'http://localhost:2403/postings';
  var SERVER_URL_USERS = 'http://localhost:2403/users';

  var App = window.App;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var User = App.User;
  var Posting = App.Posting;
  var PostingCard = App.PostingCard;
  var remoteDSPostings = new RemoteDataStore(SERVER_URL_POSTINGS);
  var remoteDSUsers = new RemoteDataStore(SERVER_URL_USERS);

  var postings = [];
  var postingListRoot = $(".row");
  var postingCardObj = new PostingCard(postingListRoot, "data-id");

  remoteDSPostings.getAll(function(i) {
    postings = i;

    postings.forEach(function(j){
      postingCardObj.addRow(j, function(k){
        window.location.replace("http://localhost:3000/posting.html?pid=" + k);
      });
    });

  });
*/
})(window);
