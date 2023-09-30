//js 
//wow start
wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
})
wow.init();

// Aos start
AOS.init({
    offset: 100,
    delay: 50,
    duration: 500,
    easing: 'linear'

});

// aos-2 start
AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

//jq
$(document).ready(function(){

 //counter-up start
	$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//mixitup start
    var mixer = mixitup('#hello', {
        animation: {
            duration: 300
        }
    });
//lightbox start
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

});
 

