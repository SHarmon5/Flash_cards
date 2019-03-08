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

  $("#btn-add-card").on("click", function() {
    // addNewCard();
  })

  $("#submit").on("click", function( title, description ) {
    debugger
  })

    
});
