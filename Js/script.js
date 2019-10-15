startMinute = (minuteDegree) => {
  document.getElementById('minute').style.transform = "rotate(" + minuteDegree + "deg)";
}
startSecound = (secoundDegree) => {
  document.getElementById('secound').style.transform = "rotate(" + secoundDegree + "deg)";
}
startHour = (hourDegree) => {
  document.getElementById('hour').style.transform = "rotate(" + hourDegree + "deg)";
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
//Iniliza the Date and calulate each hands degree
var time = new Date();
var secound = time.getSeconds();
var minute = time.getMinutes();
var hour = time.getHours();
var secoundDegree = 270 + Number(secound*6);
var minuteDegree = 270 + Number(minute*6);
var hourDegree = 270 + Number((hour%12)*30);
//Inilize with the currebt initial value
document.getElementById('minute').style.transform = "rotate(" + minuteDegree + "deg)";
document.getElementById('secound').style.transform = "rotate(" + secoundDegree + "deg)";
document.getElementById('hour').style.transform = "rotate(" + hourDegree + "deg)";
//Start the Clock
startClock();