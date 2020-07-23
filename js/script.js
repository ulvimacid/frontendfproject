$(document).ready(function(){

    //  home page send email 
    $(".up").click(function(){
        $("html").animate({scrollTop: $(".header").offset().top})
        $(".header").removeClass("sticky")
       
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
        let menus= document.querySelectorAll(".menu div")
        let content=document.querySelectorAll(".content .flower-info");
        for (const menu of menus) {
        menu.addEventListener("click",function(){
            let index =this.getAttribute("data-index")           
            content.forEach(content=>{
                if (content.getAttribute("data-index")==index) {

                content.classList.remove("display-view");   
                }
                else{
                    content.classList.add("display-view");
                }
                })                
            })            
        }  
      
            
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
        // $("howmuch").text("0") 
      } 
      
    })   
    // to clear localstorage   
    
    $(".x").click(function(){
        let arr=JSON.parse(localStorage.getItem("flowerbusket"))        
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
               "margin-left":`-${100*(amount)}%`
           }) 
          }
       }
      

    
 

    $(".li-header").click(function(){          
        $(this).next().slideToggle("slow")
        $(this).children(1).toggleClass("rotate")
    })
    
     
    $(".tohover").mouseenter(function () {
        $(".hover1").css("transform", "translateX(150%)");
        $(".hover2").css("transform", "translateX(0%)");
    });
    $(".tohover").mouseleave(function () {
        $(".hover1").css("transform", "translateX(0%)");
        $(".hover2").css("transform", "translateX(-130%)");
    });
    


            //  animation 
            $(".fromhere").waypoint(function(direction){
                if (direction=="down") {
                    $(".header").addClass("sticky")
                }
                else{
                    $(".header").removeClass("sticky")
                }
            })
                $(".expert-animation").waypoint(function(direction){
                    $(".expert-animation").addClass("animated fadeIn")
                
                }, {
                    offset: '50%'
                    })
                $(".expert-animation1").waypoint(function(direction){
                    $(".expert-animation1").addClass("animated fadeIn")
                   
                 }, {
                      offset: '50%'
                    })
                    $(".blog-animation").waypoint(function(direction){
                        $(".blog-animation").addClass("animated fadeInUp")
                       
                     }, {
                          offset: '50%'
                        })
                    $(".blog-center-card").waypoint(function(direction){
                     $(".blog-center-card").addClass("animated fadeinDown")
                           
                    }, {
                       offset: '50%'
                    })
                    $(".shoplist-animation").waypoint(function(direction){
                        $(".shoplist-animation").addClass("animated bounceInRight")
                              
                       })
                       $(".image-animation").waypoint(function(direction){
                        $(".image-animation").addClass("animated bounceInUp")
                              
                       },{
                        offset: '50%' 
                      })
                      $(".choose-image-animation").waypoint(function(direction){
                        $(".choose-image-animation").addClass("animated fadeinDown")
                              
                       }, {
                          offset: '50%'
                       })
             
            
                       function Showbusket(){
                        let arr=JSON.parse(localStorage.getItem("flowerbusket"))
                        $("#busketlength").text(arr.length)
                       }
                       Showbusket()








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

