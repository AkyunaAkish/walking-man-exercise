var img = document.getElementById('gif');
img.style.borderBottom = "solid black 1px";
img.style.display = "inline-block";
img.style.position= 'absolute';
img.style.left = "0";

var imgPos = 0;
var advance = 1;
var height = 0;
var dropping = 100;
var setImgPos= function(e){
  if(imgPos >= 1130){
    advance = -1;
    img.style.transform = 'rotateY(180deg)';
    height += dropping;
    img.style.top = height + 'px';
  }
  if(imgPos <= 0){
    advance = 1;
    img.style.transform = '';
    height += dropping;
    img.style.top = height + 'px';

  }
  if(height >= 500){
    dropping = -50;
  }
  if(height < 0){
    dropping = 50;
  }
    imgPos += advance;
  img.style.left = imgPos + "px";
};
var intervalID = window.setInterval(setImgPos, -200);
