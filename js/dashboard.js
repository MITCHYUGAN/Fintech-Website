// import {input} from "./signuplogin";

// const input = require('./signuplogin')

const tog = document.getElementById('togNavIcons')
const removenav = document.getElementById('removenav')
const header = document.querySelector('header')
const navText = document.querySelectorAll('nav-text')

tog.addEventListener('click', function(){
    header.classList.add('headerActive')
})
removenav.addEventListener('click', function(){
    header.classList.remove('headerActive')
})

const dashboardcontent = document.querySelectorAll('dashboardActive')
const nav = document.querySelector('nav')
const nav1 = document.querySelector('.nav1')
const nav2 = document.querySelector('.nav2')
const nav3 = document.querySelector('.nav3')

const admin = document.querySelector('.admin')
const managers = document.querySelector('.manager')
const staffs = document.querySelector('.staff')
let bool = true

nav1.addEventListener('click', function(){
    staffs.classList.remove('dashboardActive')
    managers.classList.remove('dashboardActive')
    admin.classList.add('dashboardActive')
    nav3.classList.remove('navActive')
    nav2.classList.remove('navActive')
    nav1.classList.add('navActive')
})

nav2.addEventListener('click', function(){
    staffs.classList.remove('dashboardActive')
    admin.classList.remove('dashboardActive')
    managers.classList.add('dashboardActive')
    nav3.classList.remove('navActive')
    nav1.classList.remove('navActive')
    nav2.classList.add('navActive')
})
nav3.addEventListener('click', function(){
    admin.classList.remove('dashboardActive')
    managers.classList.remove('dashboardActive')
    staffs.classList.add('dashboardActive')
    nav1.classList.remove('navActive')
    nav2.classList.remove('navActive')
    nav3.classList.add('navActive')
})

const serch = document.getElementById('ressearch')
const search = document.querySelector('.search')
const allico = document.querySelector('.notprof')
const insideicon = document.querySelector('.searchinputicon')

serch.addEventListener('click', function(){
    insideicon.remove()
    search.classList.toggle('searchActive')
    allico.classList.toggle('alliconon')
})











const logOut = document.getElementById('backToLogin')

logOut.addEventListener('click', function(){
    window.location.replace('file:///C:/Users/MITCHIGAN/Documents/FINTECH%20WEBSITE/signuplogin.html')
})