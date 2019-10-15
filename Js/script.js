var secoundDegree = 270;
var minuteDegree = 270;
var hourDegree = 0;
startMinute = (secoundDegree) => {
  var secound = document.getElementById('minute').style.transform = "rotate(" + secoundDegree + "deg)";
 console.log(secound); 
}
startSecound = (secoundDegree) => {
  var secound = document.getElementById('secound').style.transform = "rotate(" + secoundDegree + "deg)";
 console.log(secound); 
}


setInterval( function() {
  secoundDegree = secoundDegree + 6;
  startSecound(secoundDegree);
}, 1000);
setInterval( function() {
  minuteDegree = minuteDegree + 6;
  startMinute(minuteDegree);
}, 60000);