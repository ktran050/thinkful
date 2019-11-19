// Adding an item to the list
    // When the form "js-shopping-list-form" submit button is clicked add a [li] w/ class "shopping-item" to [ul] "shopping-list" ex:
        //     <li>
        //     <span class="shopping-item">apples</span>
        //     <div class="shopping-item-controls">
        //       <button class="shopping-item-toggle">
        //         <span class="button-label">check</span>
        //       </button>
        //       <button class="shopping-item-delete">
        //         <span class="button-label">delete</span>
        //       </button>
        //     </div>
        //   </li>

$('#js-shopping-list-form').find('button').on('click', event => {
    event.preventDefault();
    $('.shopping-list').append(
        `<li>
            <span class="shopping-item">${$('#shopping-list-entry').val()}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
    );
}); 

// check and uncheck items on the list by clicking the "shopping-item-toggle" button
$('.shopping-item-toggle').on('click', event =>{
    // console.log(`this: ${$(event.currentTarget).parent().siblings('.shopping-item')}`);
    $(event.currentTarget).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
});

// permanently remove items from the list when the button "shopping-item-delete" is pressed
$('.shopping-item-delete').on('click', event =>{
   $(event.currentTarget).parent().parent().remove();
});