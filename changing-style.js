var e = document.getElementById('output');
e.style.color = '#FF0000';

//using JQUERY
$('output').css('color', '#FF0000');

$('output').addClass('crazyColors');
$('output').removeClass('crazyColors');
$('output').toggleClass('crazyColors');

// Modernizr
if (!Modernizr.cssgradients){
    
}
var CSS3Demos = (function(){
    function isSelectorSupported(anySelector){
        var newStyle = document.createElement("style"),
        cssRule = anySelector + "{}",
        isSupported = false,
        styles,
        rules,
        selectorText;

        newStyle.type = "text/css";
    }
});

/* Resources 
http://bit.ly/palermo4css3
http://www.w3.org/Style/CSS/
http://html5please.us/#css
http://www.modernizr.com
http://bit.ly/css3-msdn
http://www.css3maker.com
*/