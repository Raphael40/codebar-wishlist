/* Exercise 1: Wish list */
function addToList(item) {
    $('#items').append('<li>' + item + '<span class="label pending">Pending</span>' + '</li>')

}

$(document).on('click', '#add-to-list', function() {
 let form_input = $('#item').val();
    addToList(form_input);
    $('#item').focus();
    $('#item').val('');    
});

$(document).on('click', '.pending', function() {
    let li_node = $(this).parent();
    li_node.append("<span class='label success'>Done!</span>");
    li_node.remove('.pending');

});

