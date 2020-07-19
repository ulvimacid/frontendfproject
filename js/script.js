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



