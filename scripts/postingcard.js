(function(globalObj) {
  'use strict';

  /*
  <div class="card" data-id="1">
     <img data-src="holder.js/100px280/thumb" >
     <p class="card-text">This is a wider card </p>
   </div>
  */
  function Row(postingItem, fn) {
    //Constructor code will go there
    var $div = $('<div></div>', {
      'data-id': postingItem.id,
      'class': 'card'
    });

    var $img = $('<img></img>', {
      'data-src': postingItem.picUrl,
      'src': postingItem.picUrl,
      'class':'imgcard'
    });

    var $p = $('<p></p>', {
      'class': 'card-text'
    });

    $p.append('Vote: ' + postingItem.vote + ' ' + postingItem.desc);

    $div.append($img);
    $div.append($p);

    $div.on('click', function(event) {
      var item = $div.attr("data-id");
      fn(item);
    });

    this.$element = $div;
  }

  var App = globalObj.App || {};
  var $ = globalObj.jQuery;

  function PostingCard(selector, targetValue) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$element = $(selector);
    this.targetValue = targetValue;

    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  PostingCard.prototype.addRow = function(postingItem, fn) {

    // Remove any existing rows that match the element address
    this.removeRow(postingItem.id);

    //Create a new instance of a row, using the postingItem info
    var rowElement = new Row(postingItem, fn);

    // Add the new row instance's $element property to the PostingCard
    this.$element.append(rowElement.$element);
  };

  PostingCard.prototype.removeRow = function(id) {

    this.$element
      .find('[value="' + id + '"]')
      .closest('[data-posting="checkbox"]')
      .remove();
  };

  PostingCard.prototype.addClickHandler = function(fn) {

    this.$element.on('click', 'div', function(event) {
      //var item = event.target.value;
      var item = this.$element.attr(this.targetValue);
      fn(item);
    }.bind(this));
  };

  App.PostingCard = PostingCard;
  globalObj.App = App;

})(window);
