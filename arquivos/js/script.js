const btnMobile = document.querySelectorAll('#btn_mobile');

btnMobile.forEach(btn_mobile => {
    btn_mobile.addEventListener("click", function() {
        this.classList.toggle("active");
        const menu = this.nextElementSibling;
        if (menu.style.maxHeight) {
            menu.style.maxHeight = null;
        } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
        }
    })
});

const Search = document.querySelectorAll('#search');

Search.forEach(search => {
    search.addEventListener("click", function() {
        this.classList.toggle("active");
        const search_box = this.nextElementSibling;
        if (search_box.style.maxHeight) {
            search_box.style.maxHeight = null;
        } else {
            search_box.style.maxHeight = search_box.scrollHeight + "px";
        }
    })
});

/*/Menu
const btnMobiles = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

*///Busca
function filter() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul");
    li = ul.getElementsByTagName("li");


    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (!input.value) {
            li[i].style.display = "none";
        } else if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }

    }
}

//Calendario
 //Janeiro
  function mostrar1(){
      document.getElementById('janeiro').style.display = 'block';
  }
  function ocultar1(){
      document.getElementById('janeiro').style.display = 'none';
  }
  
  //Fevereiro
  function mostrar2(){
      document.getElementById('fevereiro').style.display = 'block';
  }
  function ocultar2(){
      document.getElementById('fevereiro').style.display = 'none';
  }
  
  //Março
  function mostrar3(){
      document.getElementById('marco').style.display = 'block';
  }
  function ocultar3(){
      document.getElementById('marco').style.display = 'none';
  }
  
  //Abril
  function mostrar4(){
      document.getElementById('abril').style.display = 'block';
  }
  function ocultar4(){
      document.getElementById('abril').style.display = 'none';
  }
  
  //Maio
  function mostrar5(){
      document.getElementById('maio').style.display = 'block';
  }
  function ocultar5(){
      document.getElementById('maio').style.display = 'none';
  }
  
  //Junho
  function mostrar6(){
      document.getElementById('junho').style.display = 'block';
  }
  function ocultar6(){
      document.getElementById('junho').style.display = 'none';
  }
  
  //Julho
  function mostrar7(){
      document.getElementById('julho').style.display = 'block';
  }
  function ocultar7(){
      document.getElementById('julho').style.display = 'none';
  }
  
  //Agosto
  function mostrar8(){
      document.getElementById('agosto').style.display = 'block';
  }
  function ocultar8(){
      document.getElementById('agosto').style.display = 'none';
  }
  //Setembro
  function mostrar9(){
      document.getElementById('setembro').style.display = 'block';
  }
  function ocultar9(){
      document.getElementById('setembro').style.display = 'none';
  }
  
  //Outubro
  function mostrar10(){
      document.getElementById('outubro').style.display = 'block';
  }
  function ocultar10(){
      document.getElementById('outubro').style.display = 'none';
  }
  
  //Novembro
  function mostrar11(){
      document.getElementById('novembro').style.display = 'block';
  }
  function ocultar11(){
      document.getElementById('novembro').style.display = 'none';
  }
  
  //Dezembro
  function mostrar12(){
      document.getElementById('dezembro').style.display = 'block';
  }
  function ocultar12(){
      document.getElementById('dezembro').style.display = 'none';
  }

//Cookies
var purecookieTitle="Cookies",purecookieDesc="Ao usar este site, você aceita automaticamente que usamos cookies.",purecookieLink='<a href="politica-de-privacidade">Saiba mais</a>',purecookieButton="Entendido";function pureFadeIn(e,o){var i=document.getElementById(e);i.style.opacity=0,i.style.display=o||"block",function e(){var o=parseFloat(i.style.opacity);(o+=.02)>1||(i.style.opacity=o,requestAnimationFrame(e))}()}function pureFadeOut(e){var o=document.getElementById(e);o.style.opacity=1,function e(){(o.style.opacity-=.02)<0?o.style.display="none":requestAnimationFrame(e)}()}function setCookie(e,o,i){var t="";if(i){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3),t="; expires="+n.toUTCString()}document.cookie=e+"="+(o||"")+t+"; path=/"}function getCookie(e){for(var o=e+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){for(var n=i[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return null}function eraseCookie(e){document.cookie=e+"=; Max-Age=-99999999;"}function cookieConsent(){getCookie("purecookieDismiss")||(document.body.innerHTML+='<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>'+purecookieTitle+'</a></div><div class="cookieDesc"><p>'+purecookieDesc+" "+purecookieLink+'</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">'+purecookieButton+"</a></div></div>",pureFadeIn("cookieConsentContainer"))}function purecookieDismiss(){setCookie("purecookieDismiss","1",7),pureFadeOut("cookieConsentContainer")}window.onload=function(){cookieConsent()};
