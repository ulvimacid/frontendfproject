$(document).ready(function(){
    //slider
    $(".slider-gallery").owlCarousel({
        items: 4,
        mouseDrag: true,
        dots: true,
        nav:true,
        autoplay: true,
        loop: true,
        animateOut: "fadeOut",
        smartSpeed: 800
    });
     //scroll
     $(".up").click(function(){
        $("html").animate({scrollTop: $(".header").offset().top})
         });

            
      // localStorage 
      buttons=document.querySelectorAll(".add-cart")                                      
      if (localStorage.getItem("flowerbusket")==null) {
          localStorage.setItem("flowerbusket",JSON.stringify([]))                        
      }
      buttons.forEach(buton => {
          buton.addEventListener("click",function(){
          event.preventDefault()
          if (localStorage.getItem("flowerbusket")==null) {
              localStorage.setItem("flowerbusket",JSON.stringify([]))                            
          }
          let id=this.parentNode.getAttribute("data-id")
          let image=this.parentNode.previousElementSibling.getAttribute("src")
          let price=this.previousElementSibling.innerText
          
         let flowerbusket= JSON.parse(localStorage.getItem("flowerbusket"))
          let result=flowerbusket.find(p=>p.id==id)
          if (result==undefined) {
              flowerbusket.push({
                id:id,
                count:1
              })                        
          }
          else
          {
              result.count+=1
          }
          localStorage.setItem("flowerbusket",JSON.stringify(flowerbusket))
          Showbusket()
          })                  
        
      });
     
      

     function Showbusket(){
      let arr=JSON.parse(localStorage.getItem("flowerbusket"))
      $("#busketlength").text(arr.length)
     }
     Showbusket()
                 
         $(".sale-image").mouseenter(function(){
             $(".hover-sale-flower").css({
                display:"block",
                opacity:"0.7"
             })
         })
         $(".sale-image").mouseleave(function(){
            $(".hover-sale-flower").css({
               display:"none",
               opacity:"0"
            })
        })
        
                
        


})