// =========================== FOR INDEX ===============================
const input = document.querySelectorAll('.input')
const landForm = document.getElementById('landForm')
const input1 = input[0]
const landbtnlogin = document.getElementById('landpageloginbutton')
const comemail = "ardova@gmail.com"
const companyName = "Ardova Plc"
const password = "ardovaplc123"
const index = document.querySelector('.landcontents')

if(index){
    landbtnlogin.addEventListener('click', function(){
        if(input[0].value === "" || input[1].value === "" || input[2].value === ""){
            alert("Pls Input a field")
        } else {
            window.open('file:///C:/Users/MITCHIGAN/Documents/FINTECH%20WEBSITE/dashboard.html')
        }
    })
    console.log(landForm);
}

// =========================== FOR DASHBOARD ===============================
const dashboard = document.querySelector('#dashboard')
const loggedh1 = document.querySelector('.loggedincompanyname')


if(dashboard){
     const landForm = document.getElementById('landForm')
     console.log(landForm)
}























// class Element{
//     constructor (){
//         console.log('I am Working')
//         this.FinalUser = []
//         console.log(this.FinalUser);
//         this.createUser()
//         console.log(user);
//     }
//     createUser(){
//         this.user ={
//                 name : "Isaac",
//                 age : 400
//             }
//         this.FinalUser.push(this.user)
//         return this.user
//     }
// }
// const firstUser = console.log(new Element().createUser());;