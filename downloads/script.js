var options = document.getElementById("options");
options.onchange = function() {
    //options.onchange();
    //while (true){options.onchange();};
    //options.onchange();
    lsd();
}
var trippin;
function lsd() {
    document.body.style.backgroundColor ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    //options.onchange();
    trippin = setTimeout(lsd, 10);
}
