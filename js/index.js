// ===================================== OPEN NAV AND CLOSE NAV ==============================
const tognav = document.getElementById('togNavIcons')
const navUl = document.querySelector('nav')
let tog = true;

tognav.addEventListener('click', () =>{
    navUl.classList.toggle('resNav')
    tognav.getAttribute('class')
    if(tog){
        tognav.removeAttribute('class')
        tognav.setAttribute("class", "bx bx-x")
        tog = false;
    } else if(!tog){
        tognav.removeAttribute('class')
        tognav.setAttribute("class", "bx bx-menu")
        tog = true;
    }
})


const getstarted = document.getElementById('getstartedbtn')
getstarted.addEventListener('click', function(){
    window.open('https://fintechwebsitebymitchyugan.netlify.app/signuplogin.html')
})

// ===================================== HEADER ON SCROOL ADD BACKGROUND ==============================
const header = document.querySelector('header')

window.addEventListener('scroll', function(){
    header.classList.add('headerScrolled')
    if(this.scrollY <= 100){
        header.classList.remove('headerScrolled')
    } else{
        header.classList.add('headerScrolled')
    }
})

// ===================================== FOR REVIEW THAT I MIGHT NOT USE ==============================

let slides = document.querySelectorAll(".first");
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}

function prev(){
    slides[index].classList.remove('active');   
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}



// ===================================== LOGIN TO DASHBOARD ==============================

const input = document.querySelectorAll('input')
const landbtnlogin = document.getElementById('landpageloginbutton')
const comemail = "ardova@gmail.com"
const companyName = "Ardova Plc"
const password = "ardova123"

landbtnlogin.addEventListener('click', function(){
    if(input[0].value === "" || input[1].value === "" || input[2].value === ""){
        alert("Pls Input a field")
    } else{
        window.open('https://fintechwebsitebymitchyugan.netlify.app/dashboard.html')
    }
})




// ========================================= CONNECT SEND =========================================

const sendbtn = document.querySelector('.send')

sendbtn.addEventListener('click', function(){
    if(input[3].value === ""){
        alert("Pls Input an Email")
    } else{
        alert('Thanks we will get back to you')
        console.log(input[3].value);
        input[3].value.slice()
    }
})
