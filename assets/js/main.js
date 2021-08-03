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

// swipper js
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
  });

//   Video js
const videoFile=document.getElementById('video-file'),
      videoBtn=document.getElementById('video-button'),
      videoIcon=document.getElementById('video-icon');

function playPause(){
    if(videoFile.paused){
        videoFile.play();

        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    }
    else{
        videoFile.pause();

        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
    }
}
videoBtn.addEventListener('click',playPause);
function endVideo(){
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}
videoFile.addEventListener('ended',endVideo);