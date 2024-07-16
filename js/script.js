//Countdown
var countdown =  $("#countdown").countdown360({
  radius      : 60,
 seconds     : 30,
 fontColor   : '#FFFFFF',
 autostart   : false,
 onComplete  : function () { console.log('done') }
});
countdown.start();
console.log('countdown360 ',countdown);
$(document).on("click","button",function(e){
e.preventDefault();
var type = $(this).attr("data-type");
if(type === "time-remaining")
{
 var timeRemaining = countdown.getTimeRemaining();
 alert(timeRemaining);
}
else
{
 var timeElapsed = countdown.getElapsedTime();
 alert(timeElapsed);
}
});

//
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


//Wow js plugin
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

//Aos 
AOS.init({
});
// js
AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});




$(document).ready(function(){
  //counterUp
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});


//
$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});


});
