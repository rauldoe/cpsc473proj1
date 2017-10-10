(function(globalObj){
  "use strict";

  var App = globalObj.App || {};

  function Posting(pid, title, desc, comments){
    this.pid = pid;
    this.title = title;
    this.desc = desc;
    this.comments = comments;
    this.vote = 0;
  }

  Posting.prototype.vote = function(){
    this.vote += 1;
  };

  App.Posting = Posting;
  globalObj.App = App;

})(window);
