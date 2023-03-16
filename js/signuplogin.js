// ===================================== OPEN AND CLOSE NAV ==================================
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


const loginbutton = document.getElementById('loginbtn')
const signupbutton = document.getElementById('signupbtn')
const signForm = document.querySelector('.signupform')
const loginForm = document.querySelector('.logininform')
const forms = document.getElementsByTagName('form')
const input = document.querySelectorAll('input')

// LOGIN VARABLES
const login = document.getElementById('loginToAccount')
const select = document.querySelector('#select')
const option = document.querySelectorAll('.option')
const header = document.querySelector('header')
const navloginbtn = document.querySelector('.secondButtonlog')
const navsignbtn = document.querySelector('.secondButtonsign')

// ====================== CHANGE FORM ===================
// loginbutton.addEventListener('click', function changeform(){
//     console.log("mmm");
//     signForm.classList.remove('formActive')
//     loginForm.classList.add('formActive')
//     navloginbtn.classList.remove('buttonActive')
//     navsignbtn.classList.add('buttonActive')
// })

// signupbutton.addEventListener('click', function changeform2(){
//     loginForm.classList.remove('formActive')
//     signForm.classList.add('formActive')
//     navsignbtn.classList.remove('buttonActive')
//     navloginbtn.classList.add('buttonActive')
// })

navloginbtn.addEventListener('click', function(){
    console.log("removed");
    signForm.classList.remove('formActive')
    loginForm.classList.add('formActive')
    navloginbtn.classList.remove('buttonActive')
    navsignbtn.classList.add('buttonActive')
})
navsignbtn.addEventListener('click', function(){
    loginForm.classList.remove('formActive')
    signForm.classList.add('formActive')
    navsignbtn.classList.remove('buttonActive')
    navloginbtn.classList.add('buttonActive')
})
// ============================= LOGIN TO DASHBOARD ===========================
const submitbtn = document.getElementById('submitForm')
const comemail = "ardova@gmail.com"
const companyName = "Ardova Plc"
const password = "ardova123"
login.addEventListener('click', function(){
    console.log(input[4].placeholder);
    // console.log(input[4].value);
    if(input[3].value === "" || input[4].value === ""){
        alert('Pls Input a Field')
    }
    else{
        window.location.replace("C:/Users/HP/Documents/MITCHYUGAN/New/FINTECH WEBSITE/dashboard.html")
        // console.log(__dirname);
    }
})

// =============================================== SIGNUP TO DASHBOARD ========================================
submitbtn.addEventListener('click', function(){
    console.log(companyName);
    if(input[0].value === "" || input[1].value === "" || input[2].value === ""){
        alert('Pls Input a Field')
    }
    else if(input[0].value === String || input[1].value === String){
        window.location.replace('file:///C:/Users/MITCHIGAN/Documents/FINTECH%20WEBSITE/dashboard.html')
    }
    console.log("effieg");
})

window.addEventListener('scroll', function(){
    header.classList.add('headerScrolled')
    if(this.scrollY <= 100){
        header.classList.remove('headerScrolled')
    } else{
        header.classList.add('headerScrolled')
    }
})



// ================================= REMOVING THE PLACEHOLDER OF AN INPUT ON CLICK ======================================

// let inpu = true

// input[0].addEventListener('click', function(){
//     if(inpu){
//         input[0].placeholder = ""
//         inpu = false
//     } else if(!inpu){
//         input[0].placeholder = "Email"
//         inpu = true
//     }
// })
// input[1].addEventListener('click', function(){
//     input[1].placeholder = ""
// })
// input[2].addEventListener('click', function(){
//     input[2].placeholder = ""
// })
// input[3].addEventListener('click', function(){
//     input[3].placeholder = ""
// })
// input[4].addEventListener('click', function(){
//     input[4].placeholder = ""
// })




// module.exports = {login, input}

// var value = document.querySelector('#select').value;
// let sele = document.querySelector(`#select option[value=${value}]`).innerText