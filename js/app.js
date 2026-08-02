/* =====================================
   AI IMAGE STUDIO PRO
   APP MAIN SCRIPT
===================================== */


// Mobile Menu Ready
const navLinks = document.querySelector(".nav-links");

const menuButton = document.querySelector(".menu-btn");


if(menuButton){

    menuButton.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



/* =====================================
   Smooth Scroll
===================================== */


document.querySelectorAll("a[href^='#']")
.forEach(link=>{

    link.addEventListener("click",function(e){

        const target =
        document.querySelector(
        this.getAttribute("href")
        );


        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



/* =====================================
   Button Loading Effect
===================================== */


const buttons =
document.querySelectorAll("button");


buttons.forEach(btn=>{


    btn.addEventListener("click",()=>{


        if(btn.dataset.loading){

            return;

        }


        btn.dataset.loading="true";


        setTimeout(()=>{

            btn.dataset.loading="";

        },1500);


    });


});



/* =====================================
   Current Year Footer
===================================== */


const year =
document.querySelector("#year");


if(year){

    year.innerHTML =
    new Date().getFullYear();

}



/* =====================================
   Theme Ready System
===================================== */


const themeBtn =
document.querySelector("#themeToggle");


if(themeBtn){


themeBtn.addEventListener("click",()=>{


document.body.classList.toggle("light-mode");


localStorage.setItem(

"theme",

document.body.classList.contains("light-mode")

? "light"

: "dark"

);


});


}



/* Load Saved Theme */


const savedTheme =
localStorage.getItem("theme");


if(savedTheme==="light"){

    document.body.classList.add("light-mode");

}
