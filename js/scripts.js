function Ticket(title, time, age) {
  this.itemTitle = title;
  this.itemTime = time;
  this.itemAge = age;
}

Ticket.prototype.ticketPrice = function() {
  console.log("OK");
  var ticketCost = 10;
  if (this.itemTitle == "cheap") {
    ticketCost = ticketCost - 1;
  } else if (this.itemTitle == "expensive") {
    ticketCost = ticketCost + 1;
  }
  if (this.itemTime == "matinee") {
    ticketCost = ticketCost - 3;
  } else if (this.itemTime == "primetime") {
  }
  if (this.itemAge == "discount") {
    ticketCost = ticketCost - 2;
  } else if (this.itemAge == "regular") {
  }
  return ticketCost;
}//end prototype


//end of Business Logic
$(document).ready(function(){
  $("#movie-form").submit(function(event){
    event.preventDefault();
    var movieTitle = $("select#question1").val();
    var movieTime = $("select#question2").val();
    var movieAge = $("select#question3").val();
    var showName = $("#question1 option:selected").text();
    var showTime = $("#question2 option:selected").text();
    var showPrice = $("#question3 option:selected").text();
    var moviePrice = new Ticket(movieTitle, movieTime, movieAge);

    $("#displayTicketPrice").text("$" + moviePrice.ticketPrice() + ".00");
    $(".results").append(showName + " at " + showTime + " for " + showPrice)
    // alert(moviePrice.ticketPrice());
  })//end submit fxn
})//end doc ready fxn
