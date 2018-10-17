

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
    viewRender: function(view) {
      $('#dropdown-title').text(view.name);
    },
    select: function () {
      console.log('clicked')
    },
    editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: {
        googleCalendarId: 'anaif37evp8gquo65lu6hin0lo@group.calendar.google.com'
      }
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
  
  $("#agendaWeek").on('click', function() {
    $calendar.fullCalendar('changeView', 'agendaWeek')
    $(".dropdown").css('display', 'none')
  });
  
  $("#agendaDay").on('click', function() {
    $calendar.fullCalendar('changeView', 'agendaDay')
    $(".dropdown").css('display', 'none')
  });
  
  $("#month").on('click', function() {
    $calendar.fullCalendar('changeView', 'month')
    $(".dropdown").css('display', 'none')
  });

});

//onderstaande code geeft de titel van de maand terug. 
 /* var view = $('#calendar').fullCalendar('getView');
 alert("The view's title is " + view.title);*/

