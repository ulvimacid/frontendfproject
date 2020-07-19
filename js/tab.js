$(document).ready(function(){
    //scroll
    $(".up").click(function(){
        $("html").animate({scrollTop: $(".header").offset().top})
         });
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
})