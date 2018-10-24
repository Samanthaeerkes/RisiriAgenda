

$(function() {

  // page is now ready, initialize the calendar...

  var $calendar = $('#calendar');
  
  $calendar.fullCalendar({

    googleCalendarApiKey: 'AIzaSyBlGth1NnL9T1B6iNQsHBuTsR--k1FYJ3c',

    dayClick: function(date, jsEvent, view) {   

      $(this).css('background-color', '#edf7f9');
    },

 
    header: false,
    selectable: true,
    select: function () {
      console.log('clicked')
    },
    viewRender: function(view) {
        
      $(".month-name").text(view.title);
        
    },
    editable: true,
      eventLimit: true, // allow "more" link when too many events
      weekends: false,
      events: {
        googleCalendarId: 'anaif37evp8gquo65lu6hin0lo@group.calendar.google.com'
      },

      
    });

  $("#next").on('click', function() {
    $calendar.fullCalendar('next')
  });
  
  $("#prev").on('click', function() {
    $calendar.fullCalendar('prev')
  });
  
  $("#trigger-dropdown").on('click', function() {
    $(".dropdown").css('display', 'block')
  });
  
  $("#week").on('click', function() {
    $calendar.fullCalendar('changeView', 'listWeek')
    $(".dropdown").css('display', 'none')
    $("#dropdown-title").text('Week')
  });
  
  $("#month").on('click', function() {
    $calendar.fullCalendar('changeView', 'month')
    $(".dropdown").css('display', 'none')
    $("#dropdown-title").text('Month')
  });
     $("#listDay").on('click', function() {
    $calendar.fullCalendar('changeView', 'listDay')
    $(".dropdown").css('display', 'none')
    $("#dropdown-title").text('Day')
  });


});