// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dateDisplay = $('#currentDay');
var saveBtn = $(".saveBtn")
var timeColor = $(".timeColor")



// handle displaying the time

//Display the current date in the header of the page.
function displayDate() {
  console.log("Current day!")
  var rightNow = dayjs().format('dddd, MMM DD, YYYY');
  dateDisplay.text(rightNow);
}

displayDate()


function hourTracker() {
  // Get current number of hours.
  var currentHour = dayjs().hour();

  // Loop over time blocks
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Check the time and add the classes for background indicators
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
hourTracker();

function scheduleFromStorage() {
  console.log("what is going wrong here")
  var hour9 = localStorage.getItem('hour-9');
  if (hour9) {
    $("#hour-9 .description").val(hour9)

  }
  var hour10 = localStorage.getItem('hour-10');
  if (hour10) {
    $("#hour-10 .description").val(hour10)

  }
  var hour11 = localStorage.getItem('hour-11');
  if (hour11) {
    $("#hour-11 .description").val(hour11)

  }
  var hour12 = localStorage.getItem('hour-12');
  if (hour12) {
    $("#hour-12 .description").val(hour12)

  }
  var hour13 = localStorage.getItem('hour-13');
  if (hour13) {
    $("#hour-13 .description").val(hour13)

  }
  var hour14 = localStorage.getItem('hour-14');
  if (hour14) {
    $("#hour-14 .description").val(hour14)

  }
  var hour15 = localStorage.getItem('hour-15');
  if (hour15) {
    $("#hour-15 .description").val(hour15)

  }
  var hour16 = localStorage.getItem('hour-16');
  if (hour16) {
    $("#hour-16 .description").val(hour16)

  }
  var hour17 = localStorage.getItem('hour-17');
  if (hour17) {
    $("#hour-17 .description").val(hour17)

  }
  var hour18 = localStorage.getItem('hour-18');
  if (hour18) {
    $("#hour-18 .description").val(hour18)

  }
}


scheduleFromStorage()

// set the saved schdules in localStorage
saveBtn.on('click', function () {
  // console.log("save your schedule", event.target)
  console.log("save your schedule", $(this))
  // $('col-8 col-md-10 description').siblings(event)
  var textDes = $(this).siblings(".description").val()
  console.log(textDes)
  var timeBlock = $(this).parent().attr("id")
  console.log(timeBlock)

  localStorage.setItem(timeBlock, textDes);
});

// $(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

// });