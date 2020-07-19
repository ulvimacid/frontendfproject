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
$(".up").click(function(){
  $("html").animate({scrollTop: $(".header").offset().top})
   });

// html scroll 
// if ($("html").scrollTop()>100) {
//   $(".up").css("opacity","1")
// }
// alert($("html").scrollTop())

//localstorage 

function Showbusket(){
  let arr=JSON.parse(localStorage.getItem("flowerbusket"))
  $("#busketlength").text(arr.length)
 }
 Showbusket()

})
