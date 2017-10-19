(function(globalObj) {
  'use strict';

  function Row(comment) {
    //Constructor code will go there
    var $div = $('<div></div>', {
      'class': 'comment'
    });

    $div.append(comment);

    this.$element = $div;
  }

  var App = globalObj.App || {};
  var $ = globalObj.jQuery;

  function CommentLine(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$element = $(selector);

    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  CommentLine.prototype.addRow = function(comment) {

    //Create a new instance of a row, using the comment info
    var rowElement = new Row(comment);

    // Add the new row instance's $element property to the CommentLine
    this.$element.append(rowElement.$element);
  };

  App.CommentLine = CommentLine;
  globalObj.App = App;

})(window);
