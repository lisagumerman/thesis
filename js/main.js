$(document).ready(function() {
 $('body').on(click, 'a', function(){
     var section = $(this).attr('id');
     popup("#" + section + "-popup");
 }
$('body').on(click, '.close, #fade', function(){
     popup(".active-popup");
 }
}               
                  
function popup(section) {
     $("#fade").fadeToggle();
     if ( $(section).hasClass("active-popup"){
         $(section).attr('aria-hidden',true).removeClass("active-popup");
         }
    else { $(section).attr('aria-hidden',false).addClass("active-popup");
}