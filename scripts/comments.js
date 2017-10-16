$(document).ready(function() {
  loadComments();

    $('#comment-form').submit(function() {
        //Get the data from the form
        var name = $('#name').val();
        var comment = $('#comment').val();

        // //Clear the form elements
        // $('#name').val('');
        // $('#comment').val('');
        //
        // addComment({
        //     name: name,
        //     comment: comment
        // });

        dpd.comments.post({
        name: name,
        comment: comment
        }, function(comment, error) {
        if (error) return showError(error);

        addComment(comment);
        $('#name').val('');
        $('#comment').val('');
        });

        return false;
    });

    function addComment(comment) {
        $('<div class="comment">')
            .append('<div class="author">Posted by: ' + comment.name + '</div>')
            .append('<p>' + comment.comment + '</p>')
            .appendTo('#comments');
    }

    function loadComments() {
    dpd.comments.get(function(comments, error) { //Use dpd.js to access the API
        $('#comments').empty(); //Empty the list
        comments.forEach(function(comment) { //Loop through the result
            addComment(comment); //Add it to the DOM.
        });
    });
  }


}
