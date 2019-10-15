var secoundDegree = 270;
var minuteDegree = 270;
var hourDegree = 0;
startMinute = (minuteDegree) => {
  var secound = document.getElementById('minute').style.transform = "rotate(" + minuteDegree + "deg)";
}
startSecound = (secoundDegree) => {
  var secound = document.getElementById('secound').style.transform = "rotate(" + secoundDegree + "deg)";
}
startHour = (hourDegree) => {
  var secound = document.getElementById('hour').style.transform = "rotate(" + hourDegree + "deg)";
}

startClock = () =>{
  setInterval( function() {
  secoundDegree = secoundDegree + 6;
  startSecound(secoundDegree);
  }, 1000);
  setInterval( function() {
    minuteDegree = minuteDegree + 6;
    startMinute(minuteDegree);
  }, 60000);
  setInterval( function() {
    hourDegree = hourDegree + 30;
    startHour(hourDegree);
  }, 3600000);
}
startClock();