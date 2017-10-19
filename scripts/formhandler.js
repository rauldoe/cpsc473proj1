(function(globalObj) {
  'use strict';

  var App = globalObj.App || {};
  var $ = globalObj.jQuery;

  function FormHandler(selector) {

    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);

    if (this.$formElement.length == 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {

    this.$formElement.on('submit', function(event) {

      event.preventDefault();

      var data = {};

      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);

      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  FormHandler.prototype.addInputHandler = function(fn, idTag) {

    console.log('Setting input handler for form');

    this.$formElement.on('input', '[name="' + idTag + '"]', function(event){
      var id = event.target.value;
      //console.log(fn(emailAddress));

      var message = '';
      if (fn(id)) {
        event.target.setCustomValidity('');
      } else {
        message = id + ' is not an authorized email address!';
        event.target.setCustomValidity(message);
      }
    });
  };

  App.FormHandler = FormHandler;
  globalObj.App = App;

})(window);
