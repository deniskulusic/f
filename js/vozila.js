(()=>{
    
  "use strict";
  class e{
      constructor(e,t,ta,ts,td,tf,tg,th,tj){
          this.name=e.value,
          this.email=t.value,
          this.brojosoba=ta.value,
          this.date1=ts.value,
          this.date2=td.value,
          this.tipvozila=tf.value,
          this.mjestopolaska=tg.value,
          this.text1=th.value,
          this.text2=tj.value

          
      }
      validateData(){
          return{
              "name-ok":""!=this.name,
              "email-ok":(e=this.email,!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)),
              "brojosoba-ok":""!=this.brojosoba,
              "date1-ok":""!=this.date1,
              "date2-ok":""!=this.date2,
              "tipvozila-ok":""!=this.tipvozila,
              "mjestopolaska-ok":""!=this.mjestopolaska,
              "text1-ok":!0,
              "text2-ok":!0
              };
              var e
      }
      sendEmail(){
          var e=new FormData;
          e.append("action","send_email"),
          e.append("name",this.name),
          e.append("email",this.email),
          e.append("brojosoba",this.brojosoba),
          e.append("date1",this.date1),
          e.append("date2",this.date2),
          e.append("tipvozila",this.tipvozila),
          e.append("mjestopolaska",this.mjestopolaska),
          e.append("text1",this.text1),
          e.append("text2",this.text2);
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
      let n=[document.querySelector('#name'),"name-ok"],
      r=[document.querySelector("#email"),"email-ok"],
      ra=[document.querySelector("#brojosoba"),"brojosoba-ok"],
      rs=[document.querySelector("#date1"),"date1-ok"],
      rd=[document.querySelector("#date2"),"date2-ok"],
      rf=[document.querySelector("#tipvozila"),"tipvozila-ok"],
      rg=[document.querySelector("#mjestopolaska"),"mjestopolaska-ok"],
      rh=[document.querySelector("#text1"),"text1-ok"],
      rj=[document.querySelector("#text2"),"text2-ok"],
      c=[n,r,ra,rs,rd,rf,rg,rh,rj];
      const d=new e(n[0],r[0],ra[0],rs[0],rd[0],rf[0],rg[0],rh[0],rj[0]),
      u=d.validateData();
      let m=true;
      const success=document.querySelector(".success");
      const vozilopopup=document.querySelector(".vozila-popup");
      for(let e of c)
      u[e[1]]?e[0].parentElement.removeAttribute("error"):(e[0].parentElement.setAttribute("error",""),m=false);
      if(m){
        success.classList.toggle("active-upit");
        vozilopopup.classList.toggle("active-vozila");
        d.sendEmail();
       
      }
  }
  document.addEventListener("DOMContentLoaded",(
      function(){
        const vozilopopup=document.querySelector(".vozila-popup");
        const vozilopopbutton=document.querySelectorAll(" .background-v , .close-lng-v, .back-vozilo ");
        const tipvozila=document.querySelector(".tip-vozila");
        const yo=document.querySelectorAll(".vozni-park h4");
        for( var j=0;j<vozilopopbutton.length;j++){
          if(j>=2){
            vozilopopbutton[j].addEventListener('click',(event)=>{
              var h=0;
              for(h=0;h<vozilopopbutton.length;h++){
                if(event.target==vozilopopbutton[h]){
                  break;
                }
              }
              
              vozilopopup.classList.toggle("active-vozila");
              tipvozila.value=yo[h-2].innerText;
              
          });
          }
          else{
            vozilopopbutton[j].addEventListener('click',function(){
              vozilopopup.classList.toggle("active-vozila");
              
          });
          }
        }



        const upitbutton=document.querySelector(".upit-button");
        upitbutton.addEventListener("click",a);
        const success=document.querySelector(".success");
const upitbuttonclose=document.querySelectorAll(".upit-button-close , .background-s");

for(var j=0;j<upitbuttonclose.length;j++){
    upitbuttonclose[j].addEventListener('click',function(){
        success.classList.toggle("active-upit");
    });
    
}
const button = document.querySelector(".menu");
const navbar=document.querySelector("nav");
const buttonPressed = (e) => {
  navbar.classList.toggle("menu-active");
}
button.addEventListener("click", buttonPressed);

function reportWindowSize() {
  if(window.innerWidth>950){
      navbar.classList.remove("menu-active");
  }
}

window.onresize = reportWindowSize;
navbar.style.backgroundColor="transparent";
function scroll() {
  if(window.pageYOffset>0){
    navbar.style.backgroundColor="#FFFFFF";
    
  }
  else{
    navbar.style.backgroundColor="transparent";
  }
}
window.onscroll = scroll;
const lngpopup=document.querySelector(".lng-popup");
const lngpopbutton=document.querySelectorAll(".lng-desktop , .close-lng , .background");
for(var j=0;j<lngpopbutton.length;j++){
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
for(var i=0;i<lngbutton.length;i++){
  lngbutton[i].addEventListener('click',function(){
[].forEach.call(lngbutton, function(el) {
  el.removeAttribute('disabled');
});
      this.setAttribute('disabled', 'true');
  })
}
     }))})();


