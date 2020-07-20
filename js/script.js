$(document).ready(function(){

    //  home page send email 
    $(".up").click(function(){
        $("html").animate({scrollTop: $(".header").offset().top})
         });
    
    $(document).on("click","#joincolorbounch",function(){

    if ($("#joincolor").val().trim()=="") {
        $("#error").css("display","block")
        $(".error").css("display","block")       
    }
    else{        
        alert("Guya bosh qoymadin ne oldu? )))))")  
        $("#joincolor").val("");     
    }  
    
    })
    
    //  responsive nav   
     
        $(".fa-bars").click(function(){
           $(".responsive-ul").addClass("nav-active")
           $(this).addClass("d-none");
           $(".fa-times").addClass("d-block")
        })
        $(".fa-times").click(function(){
            $(".responsive-ul").removeClass("nav-active")
            $(".fa-bars").addClass("d-block")
            $(this).siblings().css("opacity","1")
         })
      
       
        //    view section
        $("#description").click(function(){
            $("#first-view").slideToggle()            

        })
        $("#information").click(function(){
            $("#second-view").slideToggle()            
        })
        $("#review").click(function(){
            $("#last-view").slideToggle()            
        })   
      
            
    // enter count for sale flower 
    let count=0;
    $("#toup").click(function(){
        count++
       if (count>0) {
        $("#howmuch").text(count) 
       }    
    })
    $("#tolow").click(function(){
        count--
       if (count>-1) {
        $("#howmuch").text(count) 
       } 
      if (count<1) {
        count=0; 
      }   
    })
    $("#showcount").click(function(){
      if (count>0) {
        $("#aboutcartcount").css("display","block")
        $("#amountcount").text(count) 
      } 
    })   
    // to clear localstorage 
    $(".x").click(function(){
        localStorage.clear()
        $("#busketlength").text(0)
        $(".infobasket").css("display","none")

    })  
    
    //progress bar
    $("#showprogres").click(function(){
        event.preventDefault()
        $('.skill-per').each(function() {
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width", per + '%');
            $({
                animatedValue: 0
            }).animate({
                animatedValue: per
            }, {
                duration: 1000,
                step: function() {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                },
                complete: function() {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                }
            });
        });
    })
    // localStorage 
    function Showbusket(){
        let arr=JSON.parse(localStorage.getItem("flowerbusket"))
        $("#busketlength").text(arr.length)
       }
       Showbusket()

            //window scroll$ icon for scrolling
            $(window).bind('scroll',function(){
                if($(window).scrollTop() >100){
                    $(".up").addClass('d-block');
                }
                 else{
                 $(".up").removeClass('d-block');
                  } 
            }) ;
      //  home last slider
      let length=$(".box").length;
      $(".imagecontainer").width(`${length*100}%`)
      $(".box").width(`${100/length}%`)       
      
      let amount=0;
      $(document).on("click","#righticon",function(){
      
         if (amount<length-1) {
            amount++;        
          $(".imagecontainer").animate({
              "margin-left":`-${amount*100}%`
          })       
         }else{
            amount=0;
             $(".imagecontainer").animate({
              "margin-left":`0%`
          }) 
         }
      })
      $(document).on("click","#lefticon" ,Slide)
      function Slide(){        
          if (amount>0) {
            amount--;        
           $(".imagecontainer").animate({
               "margin-left":`-${amount*100}%`
           })       
          }else{
            amount=length-1;
              $(".imagecontainer").animate({
               "margin-left":`-${100*(length-1)}%`
           }) 
          }
       } 
})
//  home first slider
let btnright= document.querySelector(".right");
let btnleft= document.querySelector(".left");
btnright.addEventListener("click",function(){                
    let activ=document.querySelector(".activ");                
    activ.classList.remove("activ")               

if(activ.nextElementSibling!=null){
    activ.nextElementSibling.classList.add("activ")             
   }
else{
    activ.parentNode.firstElementChild.classList.add("activ")
}               

})
btnleft.addEventListener("click",function(){
    let activ=document.querySelector(".activ");
    activ.classList.remove("activ")
    if(activ.previousElementSibling!=null){
        activ.previousElementSibling.classList.add("activ")
    }
    else{
        activ.parentNode.lastElementChild.classList.add("activ")
    }                   
})

// i hope you will like it

