$(document).ready(function(){


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
      
       
        //    view 
        $("#description").click(function(){
            $("#first-view").slideToggle()            

        })
        $("#information").click(function(){
            $("#second-view").slideToggle()            
        })
        $("#review").click(function(){
            $("#last-view").slideToggle()            
        })

        //custum tab
      
            
    //    first slider
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
    
    $(".x").click(function(){
        localStorage.clear()
        let arr=JSON.parse(localStorage.getItem("flowerbusket"))
        $("#busketlength").text(arr.length)     
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
   


})

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



