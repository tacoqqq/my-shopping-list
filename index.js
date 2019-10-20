$(function(){
  $('#js-shopping-list-form').submit( function(event) {
    event.preventDefault();
    let userInput = $(this).find('#shopping-list-entry');
    
    $('.shopping-list').append(`<li> 
    <span class="shopping-item">${userInput.val()}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>`)

    userInput.val("");
    })
    
  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  })

  $('ul').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  })

})
