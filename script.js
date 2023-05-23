function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if(inputValue === '') {
        alert('You must enter something!');
    } else {
        $('#list').append(li);
    }
    
    li.on('dblclick', function strikeThrough() {
        li.toggleClass('strike');
    });
    

    let deleteButton = $('<deleteButton> X<deleteButton>')
    li.append(deleteButton);
    deleteButton.on('click', deleteListItem);
        
    function deleteListItem() {
            li.addClass('delete');
    }
    
    $('#list').sortable();
}

    $('#input').keydown(function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          newItem();
        }
    });
