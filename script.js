//var element = document.getElementById("blah")
//var duh = Math.random();
//document.body.style.backgroundColor ='#'+(duh*0xFFFFFF<<0).toString(16);
//blah.onclick = function(){
    //stylesheet.insertRule("body {background: #444;}", 0);
    //document.body.style.backgroundColor ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
//}
var repeater;
var bleh1 = 0;
var bleh2 = 0.5;
var bleh3 = 0.7;
function doWork() {
    //document.getElementById("thing").innerHTML ='#'+((Math.abs(Math.cos(bleh1))*duh)*0xFF<<0).toString(16)+((Math.abs(Math.cos(bleh2))*duh)*0xFF<<0).toString(16)+((Math.abs(Math.cos(bleh3))*duh)*0xFF<<0).toString(16);
    //document.body.style.backgroundColor ='#'+((Math.abs(Math.cos(bleh1))*duh)*0xFF<<0).toString(16)+((Math.abs(Math.cos(bleh2))*duh)*0xFF<<0).toString(16)+((Math.abs(Math.cos(bleh3))*duh)*0xFF<<0).toString(16);
    //document.getElementById('thething').style.color = (0xFFFFFF<<0)-document.body.style.backgroundColor;
    //document.body.style.backgroundColor ='#'+(Math.abs(Math.cos(bleh))*duh*0xFFFFFF<<0).toString(16);
    repeater = setTimeout(doWork, 10);
    bleh1 += 1;
    bleh1 %= 360;
    //bleh2 += 0.001;
    //bleh3 += 0.001;
    document.body.setAttribute("style","filter:hue-rotate(" + bleh1 + "deg)")
    //bleh %= 720;
    //document.getElementById("thing").innerHTML = '#'+(Math.abs(Math.cos(bleh))*duh*0xFFFFFF<<0).toString(16);
}

doWork();
