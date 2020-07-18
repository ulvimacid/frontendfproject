$(document).ready(function(){

    
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
        //  $(".home-li").click(function(){
        //     $(this).parent().children(2).slideDown()
        //     $(this).parent().siblings().not(".fa-times").css("opacity","0")
        //      $(this).addClass("d-none");
           
        //  })
        //  $(".responsive-ul a").click(function(event){
        //      $(".responsive-ul").
        //     event.preventDefault();
        //   });
        //   $(".shop").mouseenter(function(event){
        //     $(".dhop").css({
        //         opacity:"1",
        //         visibility: "visible" })           
        //  });
        //  $(".dhop").mouseleave(function(event){
        //     $(".dhop").css({
        //         opacity:"0",
        //         visibility: "hidden" })           
        //  });
        // sticky navbar

        // tabs 
            let menus= document.querySelectorAll(".menu div")
            let content=document.querySelectorAll(".content div");
            for (const menu of menus) {
            menu.addEventListener("click",function(){
                
                let active=document.querySelector(".active")
            
                active.classList.remove("active");
                this.classList.add("active")
                let index =this.getAttribute("data-index")
                
                content.forEach(content=>{
                    if (content.getAttribute("data-index")==index) {

                    content.classList.remove("d-none");   
                    }
                    else{
                        content.classList.add("d-none");
                    }
                    })
                })
                
            }
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
    

                let btnright= document.querySelector(".right");
                let btnleft= document.querySelector(".left");
                btnright.addEventListener("click",function(){                
                    let active=document.querySelector(".active");                
                    active.classList.remove("active")               

                if(active.nextElementSibling!=null){
                    active.nextElementSibling.classList.add("active")             
                   }
                else{
                    active.parentNode.firstElementChild.classList.add("active")
                }               
                
                })
                btnleft.addEventListener("click",function(){
                    let active=document.querySelector(".active");
                    active.classList.remove("active")
                    if(active.previousElementSibling!=null){
                        active.previousElementSibling.classList.add("active")
                    }
                    else{
                        active.parentNode.lastElementChild.classList.add("active")
                    }             
                    
                    
                })


                // last slider 
                
                
  

            //    accordions
            // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
        	$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
           


        
        
    

})