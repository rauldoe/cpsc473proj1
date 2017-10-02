(function(globalObj){
  "use strict";

  var App = globalObj.App || {};

  function Vote(forId){
    this.forId = forId;
  }

  Vote.prototype.changeVote = function(forId){
    this.forId = forId;
  };

  App.Vote = Vote;
  globalObj.App = App;

})(window);
