$(document).ready(function(){
  $('.toggle').click(function() {
    event.preventDefault();
    let $this = $(this);
    $("li").siblings().find(".main").removeClass('main')
    $this.addClass("main");
  
    if ($('.inner').is(':visible')) {
        $(".inner");
        $(".sign").text('+');
    }
    if ($(this).next(".inner").is(':visible')) {
        $(this).next(".inner");
        $(this).children(".sign").text('+');
    } else {
        $(this).next(".inner");
        $(this).children(".sign").text('-');
    }
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show').slideUp(250);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(250);
        $this.next().toggleClass('show');
        $this.next().slideToggle(250);
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
