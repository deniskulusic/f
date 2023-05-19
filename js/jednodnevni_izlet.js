

(()=>{
    
  "use strict";
  class e{
      constructor(e,t,a,n){
          this.name=e.value,
          this.email=t.value,
          this.date=a.value,
          this.brojosoba=n.value
      }
      validateData(){
          return{
              "name-ok":""!=this.name,
              "email-ok":(e=this.email,!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)),
              "date-ok":""!=this.date,
              "brojosoba-ok":""!=this.brojosoba};
          var e
      }
      sendEmail(){
          var e=new FormData;
          e.append("action","send_email"),
          e.append("name",this.name),
          e.append("email",this.email);
          e.append("date",this.date);
          e.append("brojosoba",this.brojosoba);
          var t=new XMLHttpRequest;
          t.onreadystatechange=function(){
              4==this.readyState&&200==this.status&&("success"==JSON.parse(this.response).status?alert("Inquiry succesfully sent!"):alert("There was problem with sending inquiry!"))},
              t.open("POST",config.ajaxurl,!0),
              t.setRequestHeader("enctype","multipart/form-data"),
              t.send(e)
          }
          
          
          
          }
  function a(t){
      const a=t.currentTarget.parentElement;
      let n=[a.querySelector("#name"),"name-ok"],
      r=[a.querySelector("#email"),"email-ok"],
      s=[a.querySelector("#date"),"date-ok"],
      l=[a.querySelector("#brojosoba"),"brojosoba-ok"],
      c=[n,r,s,l];
      console.log(n[0])
      const d=new e(n[0],r[0],s[0],l[0]),
      u=d.validateData();
      let m=true;
      const success=document.querySelector(".success");
      for(let e of c)
      u[e[1]]?e[0].parentElement.removeAttribute("error"):(e[0].parentElement.setAttribute("error",""),m=false);
      if(m){
        success.classList.toggle("active-upit");
        d.sendEmail();
       
      }
  }
  document.addEventListener("DOMContentLoaded",(
      function(){
        const upitbutton=document.querySelector(".upit-button");
        upitbutton.addEventListener("click",a);
      const success=document.querySelector(".success");
const upitbuttonclose=document.querySelectorAll(".upit-button-close , .background-s");
for( var j=0;j<upitbuttonclose.length;j++){
    upitbuttonclose[j].addEventListener('click',function(){
        success.classList.toggle("active-upit");
    });
    
}
//Accordation

const acordation=document.getElementsByClassName('faq');
for( var i=0;i<acordation.length;i++){
  
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
const galerybutton=document.querySelectorAll(".galery-open , .background-gal");
const galerypopup=document.querySelector(".galerija-fullscreen");

for(i=0;i<galerybutton.length;i++){
  galerybutton[i].addEventListener('click',function(){
    galerypopup.classList.toggle("active-gal");
  })
}


const main =document.querySelector(".main");
const left = document.querySelector(".button-left");
const right = document.querySelector(".button-right");
const elems= document.querySelectorAll(".main img");
const num1=document.querySelector(".num1");
const num2=document.querySelector(".num2");
const footer=document.querySelector("footer");
var pageyoff=window.scrollY;
var footerftomtop =pageyoff + footer.getBoundingClientRect().top;
const upit=document.querySelector(".upit");
const upitup=document.querySelector(".upit-up");
const upitback=document.querySelector(".upit-background");
function reportWindowSize() {
  if(window.innerWidth>950){
      navbar.classList.remove("menu-active");
  }
  pageyoff=window.scrollY;
  footerftomtop =pageyoff + footer.getBoundingClientRect().top;
}

window.onresize = reportWindowSize;

var count=0;
num1.innerHTML = count+1;
num2.innerHTML = elems.length;
function scroll() {
  num1.innerHTML = Math.round(main.scrollLeft/main.offsetWidth)+1;
}
main.onscroll = scroll;
main.scrollTo(0,0);
const leftpress = (e) => {
    if(count!=0){count--}
  main.scrollTo(main.offsetWidth*count,0 );
  num1.innerHTML = count+1;
}
const rightpress = (e) => {
    if(count!=(elems.length-1)){count++}
    main.scrollTo(main.offsetWidth*count,0 );
    num1.innerHTML = count+1;

  }

right.addEventListener("click", rightpress);
left.addEventListener("click", leftpress);
//Mobile upit up/down
function scroll_body(){
  if(window.scrollY + window.innerHeight>footerftomtop+100){
    upit.classList.add("upit-footer");
  }
  else{
    upit.classList.remove("upit-footer");
  }
}

document.body.onscroll = scroll_body;
function upitupf() {
  upit.classList.toggle("up-upit");
    upitback.classList.toggle("up-upitb");
}
upitup.onclick=upitupf;
upitback.onclick=upitupf;
//Success popup



//Menu dropdown

const button2 = document.querySelector(".menu");
const navbar=document.querySelector("nav");
const buttonPressed2 = (e) => {
  navbar.classList.toggle("menu-active");
}
button2.addEventListener("click", buttonPressed2);



//Language

const lngpopup=document.querySelector(".lng-popup");
const lngpopbutton=document.querySelectorAll(".lng-desktop , .close-lng , .background");
for(j=0;j<lngpopbutton.length;j++){
  lngpopbutton[j].addEventListener('click',function(){
      lngpopup.classList.toggle("active-lng");
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
const lngpopupmobile=document.querySelector(".menu-mobile");
const lngpopbuttonmobile=document.querySelectorAll(".lng-mobile-text , .lng");
for(j=0;j<lngpopbuttonmobile.length;j++){
  
  lngpopbuttonmobile[j].addEventListener('click',function(){
      lngpopupmobile.classList.toggle("lng-mobile-active");
  });
  
}




//Show more

const more=document.querySelector(".more");
var showmore=document.querySelector(".text-underline");
const morepressed = (e) => {
more.classList.toggle("show-more");
  if (showmore.innerHTML === "Prikaži više") {
    showmore.innerHTML = "Prikaži manje";
  } else {
    showmore.innerHTML = "Prikaži više";
  }
}
showmore.addEventListener("click", morepressed);
     }))})();
