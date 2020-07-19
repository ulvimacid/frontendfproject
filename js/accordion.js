$(document).ready(function(){

//  accordion

$(".wrapper-header").click(function(){
  if ($(this).next()[0]!= $(".accordion-active")[0]) {
    $(".accordion-active").slideUp("slow",function(){
        $(this).removeClass("accordion-active")
       })
       $(this).next().slideDown("slow",function(){
           $(this).addClass("accordion-active")
       })      
  }
  else{
    $(".accordion-active").slideUp("slow",function(){
        $(this).removeClass("accordion-active")
       })      
}
    
})

// html scroll 

$(".up").click(function(){
    $("html").animate({scrollTop: $(".header").offset().top})
     });

})