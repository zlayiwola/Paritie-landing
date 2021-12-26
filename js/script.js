function scrollToTop(){
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
        document.getElementById("totop").classList.add("show");
    }
    else{
        document.getElementById("totop").classList.remove("show");
    }
}

function header(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementById("header").classList.add("down");
    }
    else{
        document.getElementById("header").classList.remove("down");
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

window.onscroll = function() {
    scrollToTop();
    header();
};

function displayMenu(){
    let toggler = document.getElementById("toggle");
    

    toggler.addEventListener('click', function () {
            menu.classList.add("show");
            // toggler.classList.toggle("active");
    })
}
function closeMenu(){
    let menu = document.getElementById("full-nav");
    
}

var menu = document.querySelector("#full-nav");
var innerMenu = document.querySelector("#full-nav .container");
window.addEventListener('click', (e)=>{
    if(e.target == innerMenu){
        menu.classList.remove("show")
    }
})

displayMenu();
closeMenu();