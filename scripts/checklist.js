(function(globalObj) {
  'use strict';

  function Row(postingItem) {
    //Constructor code will go there
    var $div = $('<div></div>', {
      'data-posting': 'checkbox',
      'class': 'checkbox'
    });

    var $label = $('<label></label>');

    var $checkbox = $('<input></input>', {
      type: 'checkbox',
      value: postingItem.pid
    });

    var description = postingItem.title + ' ';

    description += postingItem.picUrl + ' ';

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

  var App = globalObj.App || {};
  var $ = globalObj.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$element = $(selector);

    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  CheckList.prototype.addRow = function(postingItem) {

    // Remove any existing rows that match the element address
    this.removeRow(postingItem.pid);

    //Create a new instance of a row, using the postingItem info
    var rowElement = new Row(postingItem);

    // Add the new row instance's $element property to the checklist
    this.$element.append(rowElement.$element);
  };

  CheckList.prototype.removeRow = function(pid) {

    this.$element
      .find('[value="' + pid + '"]')
      .closest('[data-posting="checkbox"]')
      .remove();
  };

  CheckList.prototype.addClickHandler = function(fn) {

    this.$element.on('click', 'input', function(event){
      var pid = event.target.value;
      this.removeRow(pid);
      fn(pid);
    }.bind(this));
  };

  App.CheckList = CheckList;
  globalObj.App = App;

})(window);
