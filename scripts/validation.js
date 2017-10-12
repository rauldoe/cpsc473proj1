(function(globalObj) {
  'use strict';

  var App = globalObj.App || {};

  var Validation = {
    isEmail: function(email) {
      
      return /.+@.+\.com$/.test(email);
    }
  };

  App.Validation = Validation;
  globalObj.App = App;

})(window);
