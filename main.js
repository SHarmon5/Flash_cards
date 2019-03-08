




$(document).ready(function() {

  var editTitle;

  $('#edit').on('click', function() {
    editTitle= document.getElementByClassName('#flash_card').innetText

  })

  $(document).on('click', '#delete-card', function() {
    var id = $(this).siblings('.card-item').data().id
  }).done(function() {


  }

})