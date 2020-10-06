$(function () {
    //Creates new items
        $('#js-shopping-list-form').submit(function(event){
            event.preventDefault();
            let item = $(event.currentTarget).find('#shopping-list-entry');
            console.log(item);
            $('.shopping-list').append(`
            <li>
                <span class="shopping-item">${item.val()}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>
            `);
            item.val('');
        });
    //Deletes existing items
        $('.shopping-list').on('click', '.shopping-item-delete', function(event){
            $(this).parent().parent().remove();
        });
    //Checks off items
        $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
            $(this).parent().parent().children('span').toggleClass('shopping-item__checked');
        });
    });

/*
.shopping-item__checked 
*/