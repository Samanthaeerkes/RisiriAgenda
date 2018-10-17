

$(function() {

  // page is now ready, initialize the calendar...

  
  $('#calendar').fullCalendar({

    googleCalendarApiKey: 'AIzaSyBlGth1NnL9T1B6iNQsHBuTsR--k1FYJ3c',


// put your options and callbacks here
  dayClick: function(date, jsEvent, view) {   

    // change the day's background color just for fun
    $(this).css('background-color', '#edf7f9');

  },
        
        header: {
      left: '#',
      center: 'prev, title, next',
      right: 'month,agendaWeek,agendaDay,listWeek'
    },
    selectable: true,
    select: function () {
       console.log('clicked')
    },
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: {
      googleCalendarId: 'anaif37evp8gquo65lu6hin0lo@group.calendar.google.com'
    }
  });
    
  
        
    });
//onderstaande code geeft de titel van de maand terug. 
 /* var view = $('#calendar').fullCalendar('getView');
alert("The view's title is " + view.title);*/

