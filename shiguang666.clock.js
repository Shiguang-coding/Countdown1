var clock

$(document).ready(function () {
  var current_year = new Date().getFullYear();
  var myDate = new Date("6, 7, "+current_year+" 09:00:00");

  var month = 5, day = 7
  
  if (new Date() > myDate) {
    var year = current_year+1
  } else {
    var year = current_year
  }
  
  document.getElementById('te').innerHTML = year

  var futureDate = new Date(year, month, day, 9)
  var diff = futureDate.getTime() / 1000 - new Date().getTime() / 1000

  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
  })
})
