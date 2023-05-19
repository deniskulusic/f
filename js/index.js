const button = document.querySelector(".menu");
const navbar=document.querySelector("nav");
const body=document.querySelector("body");
const buttonPressed = (e) => {
  navbar.classList.toggle("menu-active");
}
button.addEventListener("click", buttonPressed);


const wrap=document.querySelector(".wrapper");
const dark=document.querySelector(".dark");
var pageyoff;
var darkfromtop;
var darkheight;
const paralax=document.getElementById("naslov");

pageyoff=wrap.scrollTop;
darkfromtop=pageyoff + dark.getBoundingClientRect().top;
darkheight=dark.offsetHeight;
var int
if((window.innerWidth)>1420){
  int=window.innerWidth/2-640
}
else{
int=70
}
const upit=document.querySelector(".upit");
const upitup=document.querySelectorAll(".upit-up , .choose, .upit-background");
const upitback=document.querySelector(".upit-background");
console.log(upitup)
for(j=0;j<upitup.length;j++){
  console.log(upitup[j])
  upitup[j].addEventListener('click',function(){
    upit.classList.toggle("up-upit");
    upitback.classList.toggle("up-upitb");
  });
};
function reportWindowSize() {
  if(window.innerWidth>950){
      navbar.classList.remove("menu-active");
  }
  pageyoff=wrap.scrollTop;
  darkfromtop=pageyoff + dark.getBoundingClientRect().top;
  darkheight=dark.offsetHeight;
  if(window.innerWidth>1420){
    int=window.innerWidth/2-640  }
  else{
  int=70
  }
}

window.onresize = reportWindowSize;
function scroll() {

    if(wrap.scrollTop>(darkfromtop + darkheight)){
        body.classList.remove("inverted");
        
    }
    else if((wrap.scrollTop>darkfromtop)){
        body.classList.add("inverted");
    }
    
    else{
        body.classList.remove("inverted");
    }
    if(wrap.scrollTop+70>wrap.offsetHeight){
      navbar.classList.remove("transparent");
      paralax.style.position="relative"
    }
    else{
        navbar.classList.add("transparent");
   
    paralax.style.position="sticky"
  
    }
  }
  wrap.onscroll = scroll;
const lngpopup=document.querySelector(".lng-popup");
const lngpopbutton=document.querySelectorAll(".lng-desktop , .close-lng , .background");
for(j=0;j<lngpopbutton.length;j++){
  lngpopbutton[j].addEventListener('click',function(){
      lngpopup.classList.toggle("active-lng");
  });
  
}
const lngpopupmobile=document.querySelector(".menu-mobile");
const lngpopbuttonmobile=document.querySelectorAll(".lng-mobile-text , .lng");
for(j=0;j<lngpopbuttonmobile.length;j++){
  lngpopbuttonmobile[j].addEventListener('click',function(){
      lngpopupmobile.classList.toggle("lng-mobile-active");
  });
  
}


const lngbutton=document.querySelectorAll(".buttons button , .lng-mobile-button");
lngbutton[1].setAttribute('disabled', 'true');
lngbutton[3].setAttribute('disabled', 'true');
for(i=0;i<lngbutton.length;i++){
  lngbutton[i].addEventListener('click',function(){
[].forEach.call(lngbutton, function(el) {
  el.removeAttribute('disabled');
});
      this.setAttribute('disabled', 'true');
  })
}


const acordation=document.getElementsByClassName('faq');
for(i=0;i<acordation.length;i++){
  
    acordation[i].addEventListener('click',function(){
    var faqa=this.classList.contains("active");
        var elems = document.querySelectorAll(".faq.active");
[].forEach.call(elems, function(el) {
    el.classList.remove("active");
});

if(faqa) {
  this.classList.remove("active");
        }
        else{
          this.classList.add("active");
        }
    })
}


const sliderd =document.querySelector(".slider-dark .slider-holder");
const leftd = document.querySelector(" .dark .arrow-before");
const rightd = document.querySelector(".dark .arrow-after");
const elemsd=document.querySelectorAll(".arwelmd");

sliderd.scrollTo(0,0)
var countd=0;


const leftpressd = (e) => {
  if(countd!=0){countd--}
sliderd.scrollTo(elemsd[countd].offsetLeft-int,0 );


}
const rightpressd = (e) => {
  if(countd!=(elemsd.length-1)){countd++}
  sliderd.scrollTo(elemsd[countd].offsetLeft-int,0 );
  
}
rightd.addEventListener("click", rightpressd);
leftd.addEventListener("click", leftpressd);
