function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if(inputValue === '') {
        alert('You must enter something!');
    } else {
        $('#list').append(li);
    }
    
    function strikeThrough() {
        li.toggleClass('strike');
    }
        li.on('dblclick', strikeThrough);

    let deleteButton = $('<deleteButton> X<deleteButton>')
    li.append(deleteButton);
    
    deleteButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete');
    }

    $('#list').sortable();
};