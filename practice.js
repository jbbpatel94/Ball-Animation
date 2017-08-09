var id = 0;
var fl = 1;
var pos = 0;
var left = 0;
var flag = 1;
var speedValue = 0;
var track=0;
var count = 0;
var toggle=0;
var number = document.getElementById("number");
var range = document.getElementById("speedbar");
var container = document.getElementsByClassName("container");
var button = document.getElementById("button");
var innerlefteye= document.getElementById("innerlefteye");
var innerrighteye = document.getElementById("innerrighteye");
var righteye = document.getElementById("righteye");
var lefteye = document.getElementById("lefteye");
range.value = 100;
range.oninput = function () {
  console.log(range.value);
  speedValue = 100 - range.value;
  document.getElementById('currentSpeed').innerText = range.value;
  //  mymove(); 
  if (!fl){
    clearInterval(id);
    id = setInterval(frame, speedValue);
  }
}
function mymove() {
  var box = document.getElementById("box");
 if(toggle==0){
    button.innerHTML="STOP BALL";
          lefteye.style.left= 20 + 'px';
          righteye.style.right = 60 + 'px';
          innerlefteye.style.top = 35 + 'px';
          innerlefteye.style.left = 25 + 'px';
          innerrighteye.style.top = 35 + 'px';
          innerrighteye.style.left = 65 + 'px';
    toggle = 1;
 }
 else{
   toggle = 0;
    button.innerHTML="MOVE BALL";
 }
  if (fl == 0) {
    fl = 1;
    clearInterval(id);
  }
  else {
    fl = 0;
    id = setInterval(frame, speedValue);
  }

};
function frame() {
  //console.log(id);
  if (pos == 500) {
    flag = 0;

  }
  if (pos == 0 && flag == 0) {
    flag = 1;
    //  clearInterval(id);
  }
  if (flag === 1) {
    if(track==0){
          pos++;
          box.style.top = pos + 'px';
          innerlefteye.style.top = 40 + 'px';
          innerlefteye.style.left = 25 + 'px';
          innerrighteye.style.top = 40 + 'px';
          innerrighteye.style.left = 65 + 'px';
    }
    else{
      if(left==0){
        track=0;
        count++;
        box.style.background=getRandomColor();
        number.innerHTML=count;
         lefteye.style.left= 20 + 'px';
          righteye.style.right = 60 + 'px';
          innerlefteye.style.top = 35 + 'px';
          innerlefteye.style.left = 25 + 'px';
          innerrighteye.style.top = 35 + 'px';
          innerrighteye.style.left = 65 + 'px';
      }
      else{
          left--;
          box.style.left = left+'px';
          lefteye.style.left = 2 + 'px';
          innerlefteye.style.top = 35+ 'px';
          innerlefteye.style.left = 2 + 'px';
          innerrighteye.style.top = 35 + 'px';
          innerrighteye.style.left = 60 + 'px';
      }
    }
  }
  else {
      if(left>=container[0].offsetWidth-100){
        pos--;
        box.style.top = pos + 'px';
        track=1;
          righteye.style.left = 60 + 'px';
          innerlefteye.style.top = 30 + 'px';
          innerlefteye.style.left = 25 + 'px';
          innerrighteye.style.top = 30 + 'px';
          innerrighteye.style.left = 65 + 'px';
      }
      else{
          left++;
          box.style.left = left + 'px';
          righteye.style.left = 75 + 'px';
          innerlefteye.style.top = 35 + 'px';
          innerlefteye.style.left = 30 + 'px';
          innerrighteye.style.top = 35 + 'px';
          innerrighteye.style.left = 85 + 'px';
      }
  }
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
