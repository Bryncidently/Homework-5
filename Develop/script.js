
var event = document.querySelector("textarea");


var today = dayjs();
$('#currentDay').text(today.format("dddd, MMMM D"));

//don't forget to remove this from html and also here
var time = dayjs()
$('#currentTime').text(time.format("HH  mm"));




function displayTime() {
  $( ".timeContainer" ).each(function() {
  var timeID = parseInt( $( this ).attr("id"));
  var currentTime = parseInt( time.format("HH"));
  console.log(timeID);
  console.log(currentTime);

  if (currentTime === timeID) {
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");
  }
  else if (currentTime > timeID) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
    
  } else {
    $(this).addClass("future");
    $(this).removeClass("present");
    $(this).removeClass("past");
    
  }
  });
    
  }

displayTime();



