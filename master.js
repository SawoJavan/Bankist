/*var swiper = new Swiper(".container-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      700: {
        slidesPerView: 1,
        
      },
      1000: {
        slidesPerView: 1,
    
      },
    },
  
  });
  var swiper = new Swiper(".container-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });*/
  //start working now on js hahahaha,uwiiii.I love javascript
  //1.scrollInto view.
  let learnMore=document.querySelector(".paa");
  let section1=document.querySelector("#section1");
   learnMore.addEventListener("click",function(e){
       section1.scrollIntoView({behavior:'smooth'});
       /*let s1cords=section1.getBoundingClientRect();
       //console.log(s1cords);
       //console.log(e.target.getBoundingClientRect())
       window.scrollTo({left:s1cords.left + window.pageXOffset,
        top:s1cords.top +window.pageYOffset,
        behavior:'smooth'
      });*/
   });
   //event delegation
  /* document.querySelectorAll('.nav-link').forEach(el=>{
     el.addEventListener('click',function(e){
         e.preventDefault();
         const id=this.getAttribute('href');
         console.log(id);
         document.querySelector(id).scrollIntoView({behavior:'smooth'})
     });
   });*/

   let Navietems=document.querySelector('.nav-links');

   Navietems.addEventListener('click',callMe);
   function callMe(e) {
     if(!e.target.classList.contains('nav-link')) return;
     e.preventDefault();
     const id=e.target.getAttribute('href');
         //console.log(id);
         document.querySelector(id).scrollIntoView({behavior:'smooth'})

   }
let tabsContainer=document.querySelector('.operations-tab');
let tabs=document.querySelectorAll('.operation');
let contents=document.querySelectorAll('.operates');
tabsContainer.addEventListener('click',function (e) {
  let clicked= e.target.closest('.operation');
  //console.log(clicked);
  if(!clicked)return;
  tabs.forEach(el=>{
    el.classList.remove('operater-active')
  })
  contents.forEach(el=>{
    el.classList.remove('content-active')
  })
  clicked.classList.add('operater-active')
  document.querySelector(`.operation-content-${clicked.dataset.tab}`).classList.add('content-active');
});


let links=document.querySelectorAll('.nav-link');
document.querySelector('.nav-items').addEventListener('mouseover',function (e) {
  if(!e.target.classList.contains('nav-link'))return;
   let yoo=e.target;
   //console.log(yoo);
   links.forEach(el=>{
      el.classList.add('hide');
   });
   yoo.classList.remove('hide')
});
document.querySelector('.nav-items').addEventListener('mouseout',function (e) {
  if(!e.target.classList.contains('nav-link'))return;
   let yoo=e.target;
   //console.log(yoo);
   links.forEach(el=>{
      el.classList.remove('hide');
   });
  
});
//intersection observer
let about=document.querySelector('#about');
function observee(entries){
    entries.forEach(entry=>{
      if(!entry.isIntersecting)
    document.querySelector('.nav-items').classList.add('nav-pos');
    else document.querySelector('.nav-items').classList.remove('nav-pos');
    })
    
}; 
const options={
  root:null,
  threshold:0 
} 
const headObserver=new IntersectionObserver(observee,options);
headObserver.observe(about);
//sectionObserver
let sectas=document.querySelectorAll('.secta');
function callBack(entries,observer) {
  const [entry]=entries;
  if(!entry.isIntersecting)return;
  entry.target.classList.remove('hidden');
  observer.unobserve(entry.target);

};
const sectionObserver=new IntersectionObserver(callBack,{root:null,threshold:0.08});
sectas.forEach(el=>{
  sectionObserver.observe(el);
  el.classList.add('hidden');
});
//lazy loading of images
let allImages=document.querySelectorAll('img[data-src]');
function Beastmode(entries,observer) {
  const [entry]=entries;
  if(!entry.isIntersecting) return;
  //entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-image');
  //});
  observer.unobserve(entry.target);
}
const ImgObserver=new IntersectionObserver(Beastmode,{root:null,threshold:1});
allImages.forEach(elem=>{
  ImgObserver.observe(elem);
});
//menu bar workout
let linkos=document.querySelector('.nav-linkos');
let closeMenu=document.querySelector('.close-menu');
 closeMenu.addEventListener('click',function () {
   linkos.style.transform='translate(-350%)';
 });
 linkos.addEventListener('click',function () {
  linkos.style.transform='translate(-350%)';
});

let menuBar=document.querySelector('.menu-bars');
menuBar.addEventListener('click',function () {
  linkos.style.transform='translate(0%)';
});
closeMenu.addEventListener('mouseover',function () {
  closeMenu.style.transform='scale(1.1)';
});
closeMenu.addEventListener('mouseout',function () {
  closeMenu.style.transform='scale(0.95)';
});

let closeModal=document.querySelector('.close-modal');
let Open=document.querySelectorAll('.open');
let ModWindow=document.querySelector('.modal-windw');
closeModal.addEventListener('click',function () {
  ModWindow.style.display='none';
});
let Navbar=document.querySelector('#about');
Open.forEach(el=>{
  el. addEventListener('click',function () {
    ModWindow.style.display='block';
    Navbar.scrollIntoView({behavior:'smooth'});
  });
}); 
//slides show
let slides=document.querySelectorAll('.slide');


let Current=0;
let Maxs=slides.length;
let right=document.querySelector('.button-next');
let left=document.querySelector('.button-prev');

let goToSlide=function (current) {
  slides.forEach((e,i)=>{
    e.style.transform=`translate(${100*(i-Current)}%)`;
  });
}
 goToSlide(0)
 function NextSlide() {
  if(Current===Maxs-1){
    Current=0;
  }
  else{
    Current++;
  }
  
  goToSlide(Current);
 };

 function PrevSlide() {
  if(Current===0){
    Current=Maxs-1;
  }
  else{
    Current--;
  }
  
  goToSlide(Current);
 };
//next slide
right.addEventListener('click',NextSlide);
//prev slide
left.addEventListener('click',PrevSlide);

document.addEventListener('keydown',function (e) {
  if(e.key==='ArrowRight') NextSlide();
e.key==='ArrowLeft' && PrevSlide();
});

