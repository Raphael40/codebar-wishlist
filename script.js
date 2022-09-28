/* Exercise 1: Wish list */
wishList=[];

function addToList(item) {
    $('ol#items').append('<li>' + item + '<span class="label pending">Pending</span>' + '</li>')
}

function updateTotal() {
    var pending = $('.pending').length;
    var completed = $('.success').length;
    if (pending > 0 || completed > 0) {
        $('.total').text('Pending: ' + pending + ' Completed: ' + completed);
    }
}

$(document).ready(function () {

    // Attemp to persist wislist items in array on page reload
   /*  wishList.forEach(function (item) {
        addToList(item);
    }); */ 

    updateTotal();

    $(document).on('click', '#add-to-list', function () {
        let form_input = $('#item').val();
        $('#item').focus();
        $('#item').val('');    
        addToList(form_input);
        // wishList.push(form_input);
        updateTotal();
    });

    $(document).on('click', '.pending', function () {
        let li_node = $(this).parent();
        li_node.append("<span class='label success'>Done!</span>");
        li_node.addClass('completed');
        $(this).remove();
        updateTotal();
    });

});

