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
  var CommentLine = App.CommentLine;

  function Main_add_posting() {
  }

  Main_add_posting.prototype.init = function(pid) {
    var remoteDSPostings = new RemoteDataStore(SERVER_URL_POSTINGS);
    var remoteDSUsers = new RemoteDataStore(SERVER_URL_USERS);

    var po = new Posting();

    $('#btnadd').on('click', function(event){

      event.preventDefault();

      var remoteDSPostings = new RemoteDataStore(SERVER_URL_POSTINGS);

      $('form[data-posting="form"]').serializeArray().forEach(function(item) {
        po[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });

      po.vote = 0;

      remoteDSPostings.add('', po);
      window.location.replace("http://localhost:3000/landing.html");
    }.bind(this));

  };

  App.Main_add_posting = Main_add_posting;
  globalObj.App = App;

})(window);
