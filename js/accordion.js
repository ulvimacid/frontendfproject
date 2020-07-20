$(document).ready(function(){
  $('.toggle').click(function() {
    event.preventDefault();
    let $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show').slideUp(250);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(250);
        $this.next().toggleClass('show');
        $this.next().slideToggle(250);
        $this.find('open').removeClass('open')
    }

})
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

 

// function Showbusket(){
//   let arr=JSON.parse(localStorage.getItem("flowerbusket"))
//   $("#busketlength").text(arr.length)
//  }
//  Showbusket()

})
