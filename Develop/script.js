


//gets todays day and displays it like Monday, December 3
var today = dayjs();
$('#currentDay').text(today.format("dddd, MMMM D"));

//I like having the time at the top so I'm leaving this
var time = dayjs()
$('#currentTime').text(time.format("HH" + ":" + "mm"));



//adds class to the container depending on the time of day and if in the past, present or future
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

//saves the typed event into local storage and then also saves input when refreshed
  $(document).ready(function () {
    
    $(".saveBtn").on("click", function () {
        var event = $(this).siblings(".description").val();
        var storedKey = $(this).parent().get(0).id;
        localStorage.setItem(storedKey, event);     
        console.log("this is event",  $(this).parent().get(0).id);
    })

    for (var i = 9; i <= 17; i++) {
      var savedEvent = localStorage.getItem(i);

      if (savedEvent) {
        var timeContainer = document.getElementById(i);
        var textArea = timeContainer.querySelector("textarea");

        textArea.value = savedEvent
        
      }
      
    }
   
})

    displayTime();

 
