console.log('Loaded!');

//change to content of main-text div
var element=document.getElementById('main-text');
element.innerHTML='New Value';

//move the image
var img=document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick= function () {
    var interval = setInterval(moveRight, 100);
    //img.style.marginLeft = '100px';
};
