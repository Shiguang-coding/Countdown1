var clock

$(document).ready(function () {
  var myDate = new Date()
  myDate.setFullYear(myDate.getFullYear(), 5, 7)
  if (new Date() > myDate) {
    var year = new Date().getFullYear(), month = 6, day = 7
    var futureDate = new Date(year + 1, month - 1, day, 9)
    var diff = futureDate.getTime() / 1000 - new Date().getTime() / 1000
  } else {
    var year = new Date().getFullYear(), month = 6, day = 7
    var futureDate = new Date(year, month - 1, day, 9)
    var diff = futureDate.getTime() / 1000 - new Date().getTime() / 1000
  }
  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
  })
})
