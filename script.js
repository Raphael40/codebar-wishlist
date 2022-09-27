/* Exercise 1: Wish list */
function addToList(item) {
    $('#items').append('<li>' + item + '</li>')

}

$(document).on('click', '#add-to-list', function() {
 let form_input = $('#item').val();
    addToList(form_input);
    $('#item').focus();
    $('#item').val('');
});