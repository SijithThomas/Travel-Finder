// Show menu
const navMenu=document.getElementById('nav-menu');
const navToggle=document.getElementById('nav-toggle');
const navClose=document.getElementById('nav-close');

 if(navToggle){
    navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu')
})    
 }
 if(navClose){
     navClose.addEventListener('click',()=>{
         navMenu.classList.remove('show-menu');
     })
 }

 //Close menu when click on each Links
 const navLink=document.querySelectorAll('.nav__link');

 function linkAction(){
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
 }
 navLink.forEach(n => n.addEventListener('click', linkAction)
     
 );

//  header background  active while scroll
function scrollHeader(){
    const header=document.getElementById('header');
    if(this.scrollY >= 100)
    header.classList.add('header-scroll');
    else header.classList.remove('header-scroll');
}
window.addEventListener('scroll',scrollHeader);