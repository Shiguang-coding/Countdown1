var mytime = new Date()
mytime.setFullYear(new Date().getFullYear(), 5, 7)
if (new Date() > mytime) {
  nowyear = new Date().getFullYear() + 1
  document.getElementById('te').innerHTML = nowyear
} else {
  nowyear = new Date().getFullYear()
  document.getElementById('te').innerHTML = nowyear
}
