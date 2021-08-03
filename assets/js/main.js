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
//  menu link active while scroll
 const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//  header background  active while scroll
function scrollHeader(){
    const header=document.getElementById('header');
    if(this.scrollY >= 100)
    header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
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

// scroll up
function scrollUp(){
    const scrollUp=document.getElementById('scroll-up');
    if(this.scrollY>=560)
    scrollUp.classList.add('show__scrollup');
    else
    scrollUp.classList.remove('show__scrollup')
}
window.addEventListener('scroll',scrollUp);