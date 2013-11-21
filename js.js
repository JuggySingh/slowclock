
/** 
 * Jagvir Tiwana (http://twitter.com/mrsingh94),
*/

var size =1.4;
var hourRotation=0;
var minuteRotation=0;

function expansion()
{
  
  var clockbody = document.getElementById('Clock-Body');

    var matrix = "matrix("+ size+", 0, 0," +size+", " + (225-size*225) + "," + (225-size*225) + ")";
  
  console.log(matrix);
  
    clockbody.setAttribute("transform", matrix);
  
  size = size + 0.2;

  
  var clockhands = document.getElementById('Clock-Hands');

    var matrixhand = "matrix("+ size+", 0, 0," +size+", " + (225-size*225) + "," + (225-size*225) + ")";
  
  console.log(matrix);
  
    clockhands.setAttribute("transform", matrixhand);
  
  size = size + 0.2;
  
  if (size > 2)
  {
    size = 1;
  }
   
}
  function rotateHours()
  {
  
var clockHand = document.getElementById("hourhand");
  var rx = clockHand.getAttribute('x1');
  var ry = clockHand.getAttribute('y1');
  clockHand.setAttribute('transform', 'rotate('+hourRotation+','+rx+','+ry+')');

  
  hourRotation = hourRotation+2; // add 2px to the circle radius
  
  if (hourRotation > 359)
  {
    hourRotation = 0;
  } 
  
}
  
//run the expansion function every 2000ms (1s)
setInterval( rotateHours, 1000*60*60*1.5 ); 

function rotateMinutes()
  {
  
var minuteHand = document.getElementById("minutehand");
  var rx = minuteHand.getAttribute('x2');
  var ry = minuteHand.getAttribute('y2');
  minuteHand.setAttribute('transform', 'rotate('+minuteRotation+','+rx+','+ry+')');

  
  minuteRotation = minuteRotation+2; // add 2px to the circle radius
  
  if (minuteRotation > 359)
  {
    minuteRotation = 0;
  } 
  
}
  
//run the expansion function every 2000ms (1s)
setInterval( rotateMinutes, 1000*60*2 ); 
  


