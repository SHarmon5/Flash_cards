//show card feature

// add click handler to each card

$(document).ready ( function () {

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

})