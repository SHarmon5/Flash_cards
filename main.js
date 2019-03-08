var showAddForm = false

$(document).ready( function() {

  $(".card").on("click", function() {
    //console.log("here")
    let description = this.childNodes[3];
    vis = $(description).css("visibility")
      if (vis == "visible") {
        vis = "hidden"
      } else if (vis == "hidden") {
        vis = "visible"
      }
    $(description).css("visibility", vis)

  })

  // Toggle the new card form
  $('#btn-add-card').on('click', function() {

    toggle();
    
  })

  function toggle() {
    showAddForm = !showAddForm

    if (showAddForm) {
      $('#btn-add-card').hide();
      $('#add-card-form').show();
    } else {
      $('#btn-add-card').show();
      $('#add-card-form').hide();
    }

  }

  // Create a new flashcard at the beginning of the list of flashcards
  function addFlashcard (title, description) {
    var flashCards = $('.grid-container')

    var div = "<div class='flash_card'><p class='title'>" + title
    + "</p><hr /><p class='description'>" + description
    + "</p><button id='edit'>Edit</button><button id='delete'>Delete</button></div>"

    flashCards.append(div)
    // debugger
  }

  // Process the data from the form to create a new flashcard
  $('#submit').on('click', function(event) {
    
    
    event.preventDefault();
    var results = $('#form-new').serializeArray()
    var title = results[0].value
    var description = results[1].value
    addFlashcard(title, description)
    toggle();
  })


    
});



// function newCard() {
//   debugger
  
// }