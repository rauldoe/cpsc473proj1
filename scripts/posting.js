(function(globalObj){
  "use strict";

  var App = globalObj.App || {};

  function Posting(pid, title, desc, comments, vote, picUrl, uid) {

    var self = this;

    this.pid = pid;
    this.title = title;
    this.desc = desc;
    this.comments = comments;
    this.vote = vote;
    this.picUrl = picUrl;
    this.uid;
  }

  Posting.prototype.voteUp = function() {

    self.vote += 1;
  };

  App.Posting = Posting;
  globalObj.App = App;

})(window);
