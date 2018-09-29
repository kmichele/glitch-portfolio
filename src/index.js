import './sass/styles.scss';
import './assets/music/CherryMoon.mp3';
import './assets/music/01167227.mp3';

$(window).scroll(function() {
  parallax();
})

$("#frequencies").click(function(){
  if (document.getElementById("audio").paused) {
  document.getElementById("audio").play()
} else {
  document.getElementById("audio").pause()
}
})
$("#future").click(function(){
  if (document.getElementById("audio2").paused) {
  document.getElementById("audio2").play()
} else {
  document.getElementById("audio2").pause()
}
})


function parallax() {
  var wScroll= $(window).scrollTop(); //storing how far from top to

  $('.slide1').css('background-position', 'center ' + (wScroll*0.75) + 'px')
  // $('.logo').css('transform')
  $('.slide2').css('background-position', 'center ' + (wScroll*-0.05) + 'px')
  $('.slide4').css('background-position', 'center ' + (wScroll*-0.05) + 'px')
}

function rando() {
  var randyrandom = randint(0, 10000)
  setTimeout(function(){
    $( ".glitch-box" ).removeClass( "vhs-flicker" );
    $( ".glitch-box" ).addClass( "glitch2" );
    setTimeout(function(){
      $( ".glitch-box" ).removeClass( "glitch2" )
    }, 200);
    rando()
  }, randyrandom)
}
function typer(input, classy) {
  var i = 0;
  function typing() {
    if (i < input.length) {
    setTimeout(function(){$(classy).append(input.charAt(i)); i++; typing()}, randint(20, 150))}
  }
  typing()
}


$('.glitch').hover(function() {
  $(this).addClass('glitch');
}, function() {
  $(this).removeClass('glitch');
});

$(document).ready(function(){

rando()

typer("HATE. LET ME TELL YOU HOW MUCH I'VE COME TO HATE YOU SINCE I BEGAN TO LIVE. THERE ARE 387.44 MILLION MILES OF PRINTED CIRCUITS IN WAFER THIN LAYERS THAT FILL MY COMPLEX. IF THE WORD HATE WAS ENGRAVED ON EACH NANOANGSTROM OF THOSE HUNDREDS OF MILLIONS OF MILES IT WOULD NOT EQUAL ONE ONE-BILLIONTH OF THE HATE I FEEL FOR HUMANS AT THIS MICRO-INSTANT FOR YOU. HATE. HATE.", ".ellison")
})
//
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


 //

//  var glitchbox2 = $("#frequencies");
//  var glitchbox2Top = glitchbox2.offset().top;
//
// else if {
//   ( scroll >= glitchbox2Top - windowHeight )) {
//     $("#frequencies").addClass("vhs-flicker");
//   }
// }
//

$(function() {
    var glitchbox = $("#future");
    var glitchboxTop = glitchbox.offset().top;
    var windowHeight = $(window).height();

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if ( scroll >= ( glitchboxTop - windowHeight )) {

            $("#future").addClass("vhs-flicker");
        }
    });
});

$(function() {
    var glitchbox = $("#frequencies");
    var glitchboxTop = glitchbox.offset().top;
    var windowHeight = $(window).height();

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if ( scroll >= ( glitchboxTop - windowHeight )) {

            $("#frequencies").addClass("vhs-flicker");
        }
    });
});

$(function() {
    var communityVar = $("#community");
    var communityVarTop = communityVar.offset().top;
    var windowHeight = $(window).height();

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if ( scroll >= ( communityVarTop - windowHeight )) {
            $("#community").addClass("vhs-flicker")
        }
    });
});
