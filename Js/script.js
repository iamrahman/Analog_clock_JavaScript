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
  if((secoundDegree) % 360 == 270){
    minuteDegree = Number(minuteDegree) + Number(6);
    hourDegree = parseFloat(hourDegree) + parseFloat(Number(0.5).toFixed(1));
    startMinute(minuteDegree);
    console.log(secoundDegree + ":" + minuteDegree + ":" + hourDegree);
  }
  startSecound(secoundDegree);
  }, 1000);
}
//Iniliza the Date and calulate each hands degree
var time = new Date();
var secound = time.getSeconds();
var minute = time.getMinutes();
var hour = time.getHours();
var secoundDegree = 270 + Number(secound*6);
var minuteDegree = 270 + Number(minute*6);
let subHour = (minuteDegree % 60)/2;
var hourDegree = 270 + Number((hour%12)*30) + subHour;
//Inilize with the currebt initial value
window.onload = function() {
  console.log(secoundDegree + ":" + minuteDegree + ":" + hourDegree + ":" + subHour);
  document.getElementById('clock').style.display='block';
  document.getElementById('minute').style.transform = "rotate(" + minuteDegree + "deg)";
  document.getElementById('secound').style.transform = "rotate(" + secoundDegree + "deg)";
  document.getElementById('hour').style.transform = "rotate(" + hourDegree + "deg)";
}
//Start the Clock
startClock();