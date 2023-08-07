let open = document.querySelector(".open");
let close = document.querySelector(".close");
let ul = document.querySelector(".right-links");

open.addEventListener("click", ()=>{
    ul.classList.toggle("links-part")
    if(ul.classList.contains("links-part")){
        open.src = "images/close.png"; 
    }
    else{
        open.src = "images/menu.png"; 
    }
})