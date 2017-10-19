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

  function Main_posting() {
  }

  Main_posting.prototype.init = function(pid) {
    var remoteDSPostings = new RemoteDataStore(SERVER_URL_POSTINGS);
    var remoteDSUsers = new RemoteDataStore(SERVER_URL_USERS);

    var posting = null;

    remoteDSPostings.get(pid, function(i){
      posting = i;
      $('#pid').val(i.id);
      $('#title').val(i.title);
      $('#desc').val(i.desc);
      $('#picUrl').val(i.picUrl);
      $("#pic").attr("src", i.picUrl);
      $('#vote').val(i.vote);

      $('#commentlist').html('');

      if (posting.comments) {
        var cl = new CommentLine($('#commentlist'));

        posting.comments.forEach(function(i){
          cl.addRow(i);
        });
      }
    });

    $('#btnaddcomment').on('click', function(event){

      event.preventDefault();

      var newComment = $('#addcomment').val();

      var remoteDSPostings = new RemoteDataStore(SERVER_URL_POSTINGS);

      remoteDSPostings.get(pid, function(i){
        posting = i;
        /*$('#pid').val(i.id);
        $('#title').val(i.title);
        $('#desc').val(i.desc);
        $('#picUrl').val(i.picUrl);
        $('#vote').val(i.vote);*/

        $('#commentlist').html('');

        if (!posting.comments) {
          posting.comments = [];
        }

        posting.comments.push(newComment);

        remoteDSPostings.update(posting.id, {'comments' : posting.comments});

        if (posting.comments) {
          var cl = new CommentLine($('#commentlist'));

          posting.comments.forEach(function(i){
            cl.addRow(i);
          });
        }
      });

    });

    $('#btnvote').on('click', function(event){

      event.preventDefault();

      var po = new Posting();
      po.pid = $('#pid').val();
      po.vote = parseInt($('#vote').val()) + 1;
      po.title = $('#title').val();
      po.desc = $('#desc').val();
      po.picUrl = $('#picUrl').val();

      $('input[name=vote]').val(po.vote);

      remoteDSPostings.update(po.pid, {"vote" : po.vote});

    });


  };

  Main_posting.prototype.updateUI = function() {

    var remoteDSPostings = new RemoteDataStore(SERVER_URL_POSTINGS);

    remoteDSPostings.get(pid, function(i){
      posting = i;
      $('#pid').val(i.id);
      $('#title').val(i.title);
      $('#desc').val(i.desc);
      $('#picUrl').val(i.picUrl);
      $('#vote').val(i.vote);

      $('#commentlist').html('');

      if (posting.comments) {
        var cl = new CommentLine($('#commentlist'));

        posting.comments.forEach(function(i){
          cl.addRow(i);
        });
      }
    });
  };

  Main_posting.prototype.getUrlVars = function() {

    //https://stackoverflow.com/questions/4656843/jquery-get-querystring-from-url
    // Read a page's GET URL variables and return them as an associative array.
    //var me = getUrlVars()["me"];
    //var name2 = getUrlVars()["name2"]

    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
  }

  App.Main_posting = Main_posting;
  globalObj.App = App;

})(window);
