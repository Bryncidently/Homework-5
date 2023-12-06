


//gets todays day and displays it like Monday, December 3
var today = dayjs();
$('#currentDay').text(today.format("dddd, MMMM D"));

//I like having the time at the top so I'm leaving this
var time = dayjs()
$('#currentTime').text(time.format("HH" + ":" + "mm"));




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


  $(document).ready(function () {
    
    $(".saveBtn").on("click", function () {
        var event = $(this).siblings(".description").val();
        localStorage.setItem("event", event);
        localStorage.getItem("event", event);   
    })
   
})
    displayTime();
